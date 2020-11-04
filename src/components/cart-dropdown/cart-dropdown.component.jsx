import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (  
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItemsContainer>
      <CustomButton otherStyles={`margin-top: auto; font-size: 12px`} onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
}
 
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));