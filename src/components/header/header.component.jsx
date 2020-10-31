import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionsContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>

    </LogoContainer>
    <OptionsContainer>
      <OptionContainerLink to='/collections'>
        Shop
      </OptionContainerLink>
      <OptionContainerLink to='/collections'>
        Contact
      </OptionContainerLink>
      
      <OptionContainerLink to='/signin'>
        Sign In
      </OptionContainerLink>
      

    </OptionsContainer>

    <IconsContainer>
      <SearchContainer>
        <input type='text' placeholder='Search store...'/>
        <SearchIconCont className='searchIcon' />
      </SearchContainer>

      <CartIcon />
    </IconsContainer>
  </HeaderContainer>
)
 
export default Header;