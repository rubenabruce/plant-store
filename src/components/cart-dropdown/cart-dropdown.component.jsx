import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems }) => {
  return (  
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length > 0 
            ? 
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            :
            <EmptyMessage>Nothing in cart</EmptyMessage>
        }
      </CartItemsContainer>
      <CustomButton otherStyles={`margin-top: auto; font-size: 12px`}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
}
 
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);