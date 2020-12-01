import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems, selectCartTotal, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartHeader, CartHeaderExit, CartHeaderH2, CartItemsContainer, EmptyMessage, SubTotalCont } from "./cart-dropdown.styles";
import { useTransition } from 'react-spring';

const CartDropdown = ({ cartItems, hidden, total, history, dispatch }) => {

  const transition = useTransition(hidden, null, {
    from: { transform: 'translate3d(100%, 0, 0)', boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0)'},
    enter: { transform: 'translate3d(0, 0, 0)' , boxShadow: '0 0 0 100vmax rgba(0, 0, 0, .3)'},
    leave: { transform: 'translate3d(100%, 0, 0)',  boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0)'}
  });

  return (  
    transition.map(({item, key, props: animation}) => (
      item && 
      <CartDropdownContainer key={key} style={animation}>
        <CartHeader><CartHeaderH2>Cart</CartHeaderH2><CartHeaderExit onClick={() => dispatch(toggleCartHidden()) }>&#10005;</CartHeaderExit></CartHeader>
        <CartItemsContainer>
          {
            cartItems.length ? (
              cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
        </CartItemsContainer>
        <SubTotalCont>
          <span>Subtotal: </span> <span>£{total}</span>
        </SubTotalCont>
        <CustomButton otherStyles={`width: 100%;font-size: 12px`} onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
          GO TO CHECKOUT
        </CustomButton>
      </CartDropdownContainer>
    ))

  );
}
 
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  hidden: selectCartHidden
});


export default withRouter(connect(mapStateToProps)(CartDropdown));