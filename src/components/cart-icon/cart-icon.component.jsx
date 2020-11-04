import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconCont, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount = 0 }) => (
  <CartIconContainer className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIconCont/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);


const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
