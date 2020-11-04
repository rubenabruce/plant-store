import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51Hbm1xJeBPhfjVElRetrx5ZqiIoiys0SAL21SewKDEcO2F7FENkiMinuKr9VmYz6tKfNJt2oncQ6GWpwg8NUpUdV00SVPyUDX0';

  const onToken = token => {
    console.log(token)
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Ninas Plants'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}


export default StripeCheckoutButton;