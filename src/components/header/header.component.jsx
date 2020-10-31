import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionContainerSignOut, OptionsContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

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
      {
        currentUser ?
        <OptionContainerSignOut onClick={() => auth.signOut()}>Sign Out</OptionContainerSignOut>
        :
        <OptionContainerLink to='/signin'>
          Sign In
        </OptionContainerLink>
      }
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