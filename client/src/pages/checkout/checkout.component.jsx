import React from 'react';
import { connect } from 'react-redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutCart from '../../components/checkout-cart/checkout-cart.component';
import CheckoutDetailsForm from '../../components/checkout-details-form/checkout-details-form.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageCont } from "./checkout.styles";

const stripePromise = loadStripe('pk_test_51Hbm1xJeBPhfjVElRetrx5ZqiIoiys0SAL21SewKDEcO2F7FENkiMinuKr9VmYz6tKfNJt2oncQ6GWpwg8NUpUdV00SVPyUDX0');

const CheckoutPage = ({ cartItems, total }) => {

  return ( 
    <CheckoutPageCont>
      
      <Elements stripe={stripePromise}>
        <CheckoutDetailsForm total={total} cartItems={cartItems}/>
      </Elements>

      <CheckoutCart cartItems={cartItems} total={total} />

    </CheckoutPageCont>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);