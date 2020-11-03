import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionContainerSignOut, OptionsContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

const Header = ({ currentUser }) => (
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
        <OptionContainerSignOut onClick={() => auth.signOut()}>Sign out</OptionContainerSignOut>
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
 
export default connect(mapStateToProps)(Header);