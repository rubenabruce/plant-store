import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionsContainer } from "./header.styles";

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
        
      
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
)
 
export default Header;