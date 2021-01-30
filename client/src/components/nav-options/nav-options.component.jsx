import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use';
import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
import { toggleSideNavHidden } from '../../redux/shop/shop.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { OptionContainerLink, OptionContainerSignOut, OptionsContainer } from "./nav-options.styles";

const NavOptions = ({ currentUser, otherstyles }) => {
  const {width} = useWindowSize();
  const dispatch = useDispatch();

  const closeSideNav = () => {
    if (width < 800) dispatch(toggleSideNavHidden()) ;
  }

  return (  
    <OptionsContainer otherstyles={otherstyles}>
      <OptionContainerLink onClick={closeSideNav} to='/shop'>
        Shop
      </OptionContainerLink>
      <OptionContainerLink onClick={closeSideNav} to='/contact'>
        Contact Us
      </OptionContainerLink>
      <OptionContainerLink onClick={closeSideNav} to='/delivery'>
        Delivery
      </OptionContainerLink>
      {
        // currentUser ?
        // <OptionContainerSignOut onClick={() => auth.signOut()}>Sign out</OptionContainerSignOut>
        // :
        // <OptionContainerLink onClick={closeSideNav} to='/signin'>
        //   Sign In
        // </OptionContainerLink>
      }
    </OptionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
 
export default connect(mapStateToProps)(NavOptions);