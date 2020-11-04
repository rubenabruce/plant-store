import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageCont, CheckoutHeaderCont, HeaderBlockCont, TotalCont, TestWarningCont } from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageCont>
    <CheckoutHeaderCont>
      <HeaderBlockCont>
        <span>Product</span>      
      </HeaderBlockCont>
      <HeaderBlockCont>
        <span>Description</span>      
      </HeaderBlockCont>
      <HeaderBlockCont>
        <span>Quantity</span>      
      </HeaderBlockCont>
      <HeaderBlockCont>
        <span>Price</span>      
      </HeaderBlockCont>
      <HeaderBlockCont>
        <span>Remove</span>      
      </HeaderBlockCont>
    </CheckoutHeaderCont>
    {
      cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} item={cartItem}/>
      )
    }
    <TotalCont>
      <span>TOTAL: £{total}</span>
    </TotalCont>
    <TestWarningCont>
      *Please use the following test credit card details for payments*
      <br/>
      Visa: 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </TestWarningCont>
    <StripeCheckoutButton price={total} />
  </CheckoutPageCont>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);