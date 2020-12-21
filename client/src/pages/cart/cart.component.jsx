import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageCont, CheckoutHeaderCont, HeaderBlockCont, TotalCont, CustomButtonCont } from "./cart.styles";

const CartPage = ({ cartItems, total }) => {
  const history = useHistory();
  return (
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
        <span>SUBTOTAL: </span><span>£{total}</span>
      </TotalCont>
      <CustomButtonCont onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButtonCont>
    </CheckoutPageCont>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CartPage);