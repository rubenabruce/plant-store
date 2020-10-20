import React from 'react';

import { CartIconContainer, ShoppingIconCont, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount = 0 }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconCont/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

export default CartIcon;
