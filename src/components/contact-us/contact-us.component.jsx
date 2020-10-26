import React from 'react';

import { ContactUsCont, ContactHeaderCont, NameEmailCont, FormInputCont, MessageInputCont } from "./contact-us.styles";

const ContactUs = () => {
  return ( 
    <ContactUsCont>
      <ContactHeaderCont>Contact Us</ContactHeaderCont>
      <NameEmailCont>
        <FormInputCont type='text' label='Name' value='Name' required />
        <FormInputCont type='email' label='Email' value='Name' required />
      </NameEmailCont>
      <MessageInputCont type='text' placeholder='Enter message here...'></MessageInputCont>
    </ContactUsCont>
  );
}
 
export default ContactUs;