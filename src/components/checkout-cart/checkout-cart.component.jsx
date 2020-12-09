import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, SectionDetails, BottomCont, SectionDetailsCollumn, DetailsFlex } from "./checkout-cart.styles";

const CheckoutCart = ({ cartItems, total }) => {
  return ( 
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? (
            cartItems.map((item) => (<CartItem itemImageSize='20' key={item.id} item={item} ></CartItem>))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItemsContainer>

      <BottomCont>
        
        <SectionDetails>
          <span>Shipping Address: </span> <span>-- </span>
        </SectionDetails>
        <SectionDetailsCollumn>
          <DetailsFlex><span>Subtotal: </span> <span>£{total}</span></DetailsFlex>
          <DetailsFlex><span>Delivery: </span> <span>To be calculated</span> </DetailsFlex>

        </SectionDetailsCollumn>

        <SectionDetails className='total'>
          <span>Total: </span> <span> <b>--</b> </span>
        </SectionDetails>
      </BottomCont>

    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutCart);