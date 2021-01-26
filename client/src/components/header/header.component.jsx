import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import { toggleNavHidden, toggleSideNavHidden } from "../../redux/shop/shop.actions";

import BurgerBtn from '../../assets/Hamburger_icon.svg.png';
import CartIcon from '../cart-icon/cart-icon.component';
import NavOptions from '../nav-options/nav-options.component';
import Logo from '../logo/logo.component';

import { BurgerBtnCont, NavContainer, HeaderContainer, IconsContainer, SearchIconCont, SearchContainer, AccountIconCont } from "./header.styles";

const Header = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  return (
  <HeaderContainer>
    <NavContainer>
      <BurgerBtnCont src={BurgerBtn} onClick={() => dispatch(toggleSideNavHidden())} alt='Burger button, click to open side navigation menu.' />
      <Logo />
      { width < 800 ? null : <NavOptions /> }
      <IconsContainer>
        <AccountIconCont />
        <SearchContainer>
          <SearchIconCont onClick={() => dispatch(toggleNavHidden())} className='searchIcon' />
        </SearchContainer>
        <CartIcon />
      </IconsContainer>
    </NavContainer>
  </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(Header);