import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTransition, useSpring, useChain } from 'react-spring';

import { selectNavDropdownHidden } from '../../redux/shop/shop.selectors';

import { NavDropdownCont } from "./nav-dropdown.styles";
import SearchItems from '../search-items/search-items.component';

const NavDropdown = ({ hideNavDropdown }) => {

  const transitionRef = useRef()
  const transition = useTransition(hideNavDropdown, null, {
    ref: transitionRef,
    from: {
      height: '0%',
      opacity: 0
    },
    enter: {
      height: '100%',
      opacity: 1
    },
    leave: {
      height: '0%',
      opacity: 0
    }
  })

  const springRef = useRef()
  const spring = useSpring({
    ref: springRef,
    from: {
      borderBottom: '0px solid grey',
      height: '0px'
    },
    to: {
      borderBottom: hideNavDropdown ?  '1px solid grey' : '0px solid grey',
      height: hideNavDropdown ? '200px' : '0px' 
    }
    
  })

  useChain(hideNavDropdown ? [springRef, transitionRef] : [transitionRef, springRef], [0.1, 0.2]);
  
  return (
    
    <NavDropdownCont style={spring}>
        {
          transition.map(({ item, key, props }) => (
            item && <SearchItems key={key} animation={props} />
          ))
        }     
    </NavDropdownCont>
  );
}
 
const mapStateToProps = createStructuredSelector({
  hideNavDropdown: selectNavDropdownHidden
})

export default connect(mapStateToProps)(NavDropdown);