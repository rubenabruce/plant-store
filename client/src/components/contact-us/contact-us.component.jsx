import React, { useState } from 'react';

import { ContactUsCont, ContactHeaderCont, ContactPara, NameEmailCont, FormInputCont, MessageInputCont, CustomButtonCont } from "./contact-us.styles";

const ContactUs = ({ otherstyles, children, widthadjust }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: '' 
  });

  const { name, email, subject, message } = details;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Your name: ${name}, your email: ${email}, your subject: ${subject},  your message ${message}`)
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setDetails({ ...details, [name]: value})
  };

  return ( 
    <ContactUsCont otherstyles={otherstyles} onSubmit={handleSubmit}>
      <ContactHeaderCont>Contact Us</ContactHeaderCont>
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
      <CustomButtonCont type='submit'>Submit!</CustomButtonCont>
    </ContactUsCont>
  );
};
 
export default ContactUs;