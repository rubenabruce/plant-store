const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const transporter = require('./config');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});

app.post('/send', (req, res) => {
  // if something doesnt work in production, go to here:
  // https://medium.com/swlh/create-an-enquiry-form-in-react-and-send-email-using-nodejs-1c0cd590dce1
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: 
      `
        <p>You have a new contact request from your website</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.message}</li>
        </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to shortly.'
        });
      }
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    })
  }
})

app.post('/payment', async (req, res) => {
  
  try {
    const {amount} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, 
      currency:'GBP'
    });
    
    return res.status(200).send(paymentIntent.client_secret);
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({error});
  }

});