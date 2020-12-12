import React from 'react';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, SectionDetails, BottomCont, SectionDetailsCollumn, DetailsFlex } from "./checkout-cart.styles";

const CheckoutCart = ({ cartItems, total }) => {
  // const {Fname, Lname, postcode, address, number} = userDetails;
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

    // <SectionDetails>
    //   <span>Shipping Address: </span> <span>{ userDetails ? (`${Fname} ${Lname}`) : '--' }</span>
    // </SectionDetails>
export default CheckoutCart;