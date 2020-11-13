import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { LogoContainer, HeaderContainer, OptionContainerLink, OptionContainerSignOut, OptionsContainer, IconsContainer, SearchIconCont, SearchContainer } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>

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
    {
      hidden 
        ? null 
        : <CartDropdown /> 
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
 
export default connect(mapStateToProps)(Header);