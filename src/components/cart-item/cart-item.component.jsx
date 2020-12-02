import React from 'react';

import { CartItemCont, ItemCont, ItemDetailsCont, NamePriceCont } from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}, animations}) => (
  <CartItemCont style={animations}>
    <ItemCont src={imageUrl} alt='item'/>
    <ItemDetailsCont>
      <NamePriceCont>{name}</NamePriceCont>
      <NamePriceCont>{quantity} £{price}</NamePriceCont>
    </ItemDetailsCont>
  </CartItemCont>
)

export default CartItem;