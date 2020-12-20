import React from 'react';
import ContactUs from '../../components/contact-us/contact-us.component';

import { ContactUsPageCont } from "./contact-us-page.styles";

const ContactUsPage = () => {
  return ( 
    <ContactUsPageCont>
      <ContactUs otherstyles={`width: 80%; height: unset; @media screen and (max-width: 800px) {padding-bottom: unset !important;}`} widthadjust='45%'>
        <br /> <br />If you have any queries please don’t hesitate to get in touch. We’ll get back to you as soon as possible.
      </ContactUs>
    </ContactUsPageCont>
  );
}
 
export default ContactUsPage;