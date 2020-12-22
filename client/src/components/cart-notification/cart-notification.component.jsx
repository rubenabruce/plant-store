import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { createStructuredSelector } from 'reselect';
import { selectNewItem } from '../../redux/cart/cart.selectors';
import { cartNotificationHidden } from '../../redux/shop/shop.actions';
import { selectNotificationHidden } from '../../redux/shop/shop.selectors';

import { CartNotificationCont, CartNotificationItems, ItemName, ExitContatiners, ViewCartBtn, ExitBtn } from "./cart-notification.styles";

const CartNotification = ({ notificationHidden, newItem }) => {
  const { hidden } = notificationHidden; 
  const history = useHistory();
  const dispatch = useDispatch();
  const transition = useTransition(!hidden, null, {
    from: {
      height: '0px'
    },
    enter: {
      height: '83px'
    },
    leave: {
      height: '0px'
    }
  })

  return ( 
    transition.map(({ item, key, props: animation }) => ( 
      item &&
      <CartNotificationCont key={key} style={animation}>
        <CartNotificationItems>
          <ItemName>{newItem.name} added to cart</ItemName>
          <ExitContatiners>
            <ViewCartBtn onClick={() => {dispatch(cartNotificationHidden()); history.push('/cart');}}>View cart</ViewCartBtn>
            <ExitBtn onClick={() => dispatch(cartNotificationHidden())}>&#10005;</ExitBtn>
          </ExitContatiners>
        </CartNotificationItems>
      </CartNotificationCont>
    ))
  );
}
 
const mapStateToProps = createStructuredSelector({
  notificationHidden: selectNotificationHidden,
  newItem: selectNewItem
});

export default connect(mapStateToProps)(CartNotification);