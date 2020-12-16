import React from 'react';
import ContactUs from '../../components/contact-us/contact-us.component';

import { ContactUsPageCont } from "./contact-us-page.styles";

const ContactUsPage = () => {
  return ( 
    <ContactUsPageCont>
      <ContactUs otherstyles={`width: 80%; height: 70%;`} widthadjust='45%'>
        If you have any queries please don’t hesitate to get in touch. We’ll get back to you as soon as possible.
      </ContactUs>
    </ContactUsPageCont>
  );
}
 
export default ContactUsPage;