import React from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use';

import { toggleNavHidden, toggleSideNavHidden } from "../../redux/shop/shop.actions";

import BurgerBtn from '../../assets/Hamburger_icon.svg.png';
import CartIcon from '../cart-icon/cart-icon.component';
import NavOptions from '../nav-options/nav-options.component';
import Logo from '../logo/logo.component';

import { BurgerBtnCont, NavContainer, HeaderContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

const Header = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  return (
  <HeaderContainer>
    <NavContainer>
      <BurgerBtnCont src={BurgerBtn} onClick={() => dispatch(toggleSideNavHidden())} alt='Burger button, click to open side navigation menu.' />
      <Logo />
      { width < 800 ? null : <NavOptions /> }
      <IconsContainer>
        <SearchContainer>
          <SearchIconCont onClick={() => dispatch(toggleNavHidden())} className='searchIcon' />
        </SearchContainer>

        <CartIcon />
      </IconsContainer>
    </NavContainer>
  </HeaderContainer>
)}


export default Header;