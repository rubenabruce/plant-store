import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';

import { LogoContainer, LogoImg, NavContainer, HeaderContainer, OptionContainerLink, OptionContainerSignOut, OptionsContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <NavContainer>
      <LogoContainer to='/'>
        <LogoImg src={require('../../assets/plants-logo-25.png')} alt="Nina's plants shop logo." />
      </LogoContainer>
      <OptionsContainer>
        <OptionContainerLink to='/shop'>
          Shop
        </OptionContainerLink>
        <OptionContainerLink to='/collections'>
          Collections
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
    </NavContainer>
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
 
export default connect(mapStateToProps)(Header);