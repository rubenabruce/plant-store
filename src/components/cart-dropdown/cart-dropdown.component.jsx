import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (  
    <CartDropdownContainer>
      <CartItemsContainer>
      
      </CartItemsContainer>
      <CustomButton otherStyles={`margin-top: auto; font-size: 12px`}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
}
 
export default CartDropdown;