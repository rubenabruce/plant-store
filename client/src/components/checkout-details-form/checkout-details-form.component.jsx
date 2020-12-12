import React, { useState, useMemo } from 'react';

import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import axios from 'axios';

import useResponsiveFontSize from "../checkout-details-form/useResponsiveFontSize";

import { SectionCont, SectionHeader, FormInputCont, SectionPara, CheckoutFormsCont, ButtonCont } from './checkout-details-form.styles.js';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Roboto, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      },
      hidePostalCode: true
    }),
    [fontSize]
  );
  
  return options;
};

const CheckoutDetailsForm = ({ total }) => {
  const [isProcessing, setIsProcessing] = useState(false);  
  const [userCredentials, setUserCredentials] = useState({
    email: '', 
    fullname: '',
    postcode: '',
    street: '',
    number: '',
    addNotes: ''
  });

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  
  const { email, fullname, postcode, street, number, addNotes } = userCredentials;
  const billing_details = {
    address: {
      line1: `${street} ${number}`,
      postal_code: `${postcode}`
    },
    email: email,
    name: fullname,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    
    setIsProcessing(true);  

    const { data: clientSecret } = await axios.post('http://localhost:5000/payment', { 
      amount: total * 100
    });
    
    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billing_details
    });

    const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id
    })

    console.log(confirmedCardPayment);
  };



  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return ( 
    <CheckoutFormsCont onSubmit={handleSubmit} >
      <SectionCont>
        <SectionHeader>Contact details</SectionHeader>
        <SectionPara>We use your email address to send you confirmation and  updates on your order.</SectionPara>
        <FormInputCont type='email' name='email' label='Email (required)' value={email} handleChange={handleChange} required />
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Delivery details</SectionHeader>
        <SectionPara></SectionPara>
        <FormInputCont type='text' name='fullname' label='Fullname (required)' value={fullname} handleChange={handleChange} required />
        <FormInputCont type='text' name='postcode' label='Postcode (required)' value={postcode} handleChange={handleChange} required />
        <FormInputCont type='text' name='number' label='Street Number (required)' value={number} handleChange={handleChange} required />
        <FormInputCont type='text' name='street' label='Street Name (required)' value={street} handleChange={handleChange} required /> 
      </SectionCont> 
      <SectionCont>
        <SectionHeader>Additional notes</SectionHeader>
        <SectionPara>Any additional notes which you think we should know.</SectionPara>
        <textarea type='text' name='addNotes' value={addNotes} onChange={handleChange} />
      </SectionCont>  
      <SectionCont>
        <SectionHeader>Payment</SectionHeader>
        <SectionPara>We use your email address to send you confirmation and updates on your order.</SectionPara>
      </SectionCont>
      <CardElement options={options} />
      <ButtonCont type="submit" className={isProcessing ? 'is-processing' : ''} disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Place Order' }
      </ButtonCont>
    </CheckoutFormsCont>
  );
}
    

export default CheckoutDetailsForm;

