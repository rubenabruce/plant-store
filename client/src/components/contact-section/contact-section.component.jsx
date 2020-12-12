import React from 'react';

import InstagramSection from '../instagram-section/instagram-section.component';
import ContactUs from '../contact-us/contact-us.component';

import { ContactSectionCont } from "./contact-section.styles";

const ContactSection = () => {
  return ( 
    <ContactSectionCont>
      <InstagramSection />
      <ContactUs />  
    </ContactSectionCont>
  );
}
 
export default ContactSection;