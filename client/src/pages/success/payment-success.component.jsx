import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { PaymentSuccessCont, PaymentSuccessModel, LinkCont, Group } from './payment-success.styles';

const PaymentSuccess = () => {
  const { width, height } = useWindowSize();
  return (  
    <PaymentSuccessCont>
      <Confetti width={width} height={height} />
      <PaymentSuccessModel>
        <Group>
          <h1>Thank you!</h1>
          <h2>Your order was completed successfully.</h2>
        </Group>
        <h4>An email recipt will be sent to the email you provided</h4>
        <Group>
          <span>If you have any queries please email:</span>
          <span>nina.plants@gmail.com</span>
        </Group>
        <LinkCont to={'/'}>Back to home</LinkCont>
      </PaymentSuccessModel>
    </PaymentSuccessCont>
  );
}
 
export default PaymentSuccess;