import React from 'react';

import { EmailSentCont, EmailSentHeader, EmailSentP, CustomButtonCont } from "./email-sent.styles";

const EmailSent = ({ success }) => {
  return ( 
    <EmailSentCont style={{width: '100%', height: '100'}}>
      <EmailSentHeader>Hi, <br /> Thanks for the message</EmailSentHeader>
      <EmailSentP>{ success ? 'We appreciate you contacting Nina’s Plants. One of our colleagues will get back in touch with you soon!' : 'Unfortunalty something went wront, please try again shortly.'}</EmailSentP>
      <CustomButtonCont>Send another message</CustomButtonCont>
    </EmailSentCont>
  );
}
 
export default EmailSent;