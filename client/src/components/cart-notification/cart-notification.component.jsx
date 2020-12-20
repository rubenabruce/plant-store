import React from 'react';
import { useTransition } from 'react-spring';

import { CartNotificationCont, CartNotificationItems, ItemName, ViewCartBtn } from "./cart-notification.styles";

const CartNotification = ({ item }) => {
  return (  
    <CartNotificationCont>
      <CartNotificationItems>
        <ItemName>Item added to cart</ItemName>
        <ViewCartBtn>View cart</ViewCartBtn>
      </CartNotificationItems>
    </CartNotificationCont>
  );
}
 
export default CartNotification;