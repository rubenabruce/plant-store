import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionsContainer } from "./header.styles";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>

    </LogoContainer>
    <OptionsContainer>
      <OptionContainerLink to='/shop'>
        Shop
      </OptionContainerLink>
      <OptionContainerLink to='/shop'>
        Contact
      </OptionContainerLink>
      
          <OptionContainerLink to='/signin'>
            Sign In
          </OptionContainerLink>
        
      
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
)
 
export default Header;