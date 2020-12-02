import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems, selectCartTotal, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartHeader, CartHeaderExit, CartHeaderH2, CartItemsContainer, EmptyMessage, SubTotalCont } from "./cart-dropdown.styles";
import { config, animated, useTransition, useChain, useSpring } from 'react-spring';

const CartDropdown = ({ cartItems, hidden, total, history, dispatch }) => {

  const itemTransitionRef = useRef();
  const itemTransition = useTransition(hidden ? cartItems : [], item => item.id, {
    ref: itemTransitionRef,
    trail: 100,
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)' 
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)' 
    },
    config: config.slow
  });

  const contTransitionRef = useRef();
  const contTransition = useTransition(hidden, null, {
    ref: contTransitionRef,
    from: { transform: 'translate3d(100%, 0, 0)', boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0)'},
    enter: { transform: 'translate3d(0, 0, 0)' , boxShadow: '0 0 0 100vmax rgba(0, 0, 0, .3)'},
    leave: { transform: 'translate3d(100%, 0, 0)',  boxShadow: '0 0 0 100vmax rgba(0, 0, 0, 0)'},
    config: config.slow
  });

  const buttonSpringRef = useRef();
  const buttonSpring = useSpring({
    ref: buttonSpringRef,
    opacity: hidden ? 1 : 0, transform: hidden ? 'translate3d(0, 0, 0)' : 'translate3d(0,  100%, 0)',
    config: config.slow 
  })

  useChain(hidden ? [contTransitionRef, itemTransitionRef, buttonSpringRef] : [buttonSpringRef, itemTransitionRef, contTransitionRef], [0, 0.5, 1]);

  return (  
    contTransition.map(({item, key, props: animation}) => (
      item && 
      <CartDropdownContainer key={key} style={animation}>
        <CartHeader><CartHeaderH2>Cart</CartHeaderH2><CartHeaderExit onClick={() => dispatch(toggleCartHidden()) }>&#10005;</CartHeaderExit></CartHeader>
        <CartItemsContainer>
          {
            cartItems.length ? (
              itemTransition.map(({ item, key, props: animations }) => (<CartItem key={key} item={item} animations={animations}></CartItem>))
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
        </CartItemsContainer>
        <animated.div style={buttonSpring}>
          <SubTotalCont>
            <span>Subtotal: </span> <span>£{total}</span>
          </SubTotalCont>
          <CustomButton otherstyles={`width: 100%;font-size: 12px`} onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}>
            GO TO CHECKOUT
          </CustomButton>
        
        </animated.div>
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