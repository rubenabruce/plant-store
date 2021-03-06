import React, { useState } from 'react';
import axios   from "axios";

import EmailSent from '../email-sent/email-sent.component'

import { ContactUsParent, ContactUsCont, ContactHeaderCont, ContactPara, NameEmailCont, FormInputCont, MessageInputCont, CustomButtonCont } from "./contact-us.styles";

const ContactUs = ({ otherstyles, children, widthadjust }) => {
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);  
  
  const [details, setDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: '' 
  });

  const { name, email, subject, message } = details;

  const handleSubmit = async event => {
    event.preventDefault();
    setIsProcessing(true);
    axios
      .post('/send', { ...details })
      .then(response => {
        setResult(response);
        console.log(response)
        setDetails({
          name: '',
          email: '',
          subject: '',
          message: '' 
        })
      })
      .catch(err => {
        console.log(err)
        setResult({ success: false, message: 'Oh no, something went wrong. Please try again later!'})
      })
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setDetails({ ...details, [name]: value})
  };

  return (
    <ContactUsParent otherstyles={otherstyles}>
    <ContactHeaderCont>Contact Us</ContactHeaderCont>

      {
        result ? (
          <EmailSent success={result.success} />
        ) : (
          <ContactUsCont otherstyles={otherstyles} onSubmit={handleSubmit}>
            <ContactPara>{children}</ContactPara>
            <NameEmailCont>
              <FormInputCont 
                name='name'
                type='text' 
                label='Name' 
                handleChange={handleChange} 
                value={name} 
                required
                widthchange={widthadjust}
              />
              <FormInputCont 
                name='email' 
                type='email' 
                handleChange={handleChange} 
                value={email} 
                label='Email' 
                required
                widthchange={widthadjust}
              />
            </NameEmailCont>
            <FormInputCont 
              name='subject'
              type='text'
              handleChange={handleChange} 
              value={subject} 
              label='Subject' 
              required
              widthchange='90%'
            />
            <MessageInputCont
              name='message' 
              type='text' 
              onChange={handleChange} 
              value={message}
              placeholder='Enter message here...' 
            />
            <CustomButtonCont className={isProcessing ? 'is-processing' : ''} disabled={isProcessing} type='submit'>{ isProcessing ? 'Processing' : 'Submit!'}</CustomButtonCont>
          </ContactUsCont>
        ) 
      }

    </ContactUsParent>
  );
};
 
export default  ContactUs;