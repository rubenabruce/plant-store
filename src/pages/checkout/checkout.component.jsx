import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';
import CheckoutDetailsForm from '../../components/checkout-details-form/checkout-details-form.component';
import CheckoutStripeForm from '../../components/checkout-stripe-form/checkout-stripe-form.component';

import { CheckoutPageCont } from "./checkout.styles";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCheckoutDetails } from '../../redux/checkout/checkout.selectors';

const stripePromise = loadStripe('pk_test_51Hbm1xJeBPhfjVElRetrx5ZqiIoiys0SAL21SewKDEcO2F7FENkiMinuKr9VmYz6tKfNJt2oncQ6GWpwg8NUpUdV00SVPyUDX0');

const CheckoutPage = ({ userDetails }) => {
  console.log(userDetails);
  return ( 
    <CheckoutPageCont>
      { 
        userDetails ? 
        <Elements stripe={stripePromise}>
          <CheckoutStripeForm />  
        </Elements>
        :
        <CheckoutDetailsForm />
      }

      <CheckoutCart />

    </CheckoutPageCont>
  );
}

const mapStateToProps = createStructuredSelector({
  userDetails: selectCheckoutDetails
});

export default connect(mapStateToProps)(CheckoutPage);