import React, { useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { config, useSpring, useTransition, useChain } from 'react-spring';
import { createStructuredSelector } from 'reselect';
import { toggleSideNavHidden } from '../../redux/shop/shop.actions';

import { selectSideNavHidden } from '../../redux/shop/shop.selectors';
import Logo from '../logo/logo.component';

import NavOptions from '../nav-options/nav-options.component';

import { SideNavCont, SideNavHeader, ExitCross } from "./side-nav.styles";

const SideNav = ({ sideNavHidden }) => {
  const dispatch = useDispatch();

  const contTransitionRef = useRef();
  const contTransition = useTransition(sideNavHidden, null, {
    ref: contTransitionRef,
    from: { transform: 'translate3d(-100%, 0, 0)'},
    enter: { transform: 'translate3d(0, 0, 0)'},
    leave: { transform: 'translate3d(-100%, 0, 0)'},
    config: config.default
  });

  const springRef = useRef();
  const spring = useSpring({
    ref: springRef,
    transform: sideNavHidden ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 100%, 0)',
    opacity: sideNavHidden ? 1 : 0, 
    config: config.slow 
  })

  useChain(sideNavHidden ? [contTransitionRef, springRef] : [springRef, contTransitionRef],  [0.1, 0.2] )

  return ( 
    contTransition.map(({item, key, props: animation}) => (
      item &&    
      <SideNavCont key={key} style={animation}>
        <SideNavHeader onClick={() => dispatch(toggleSideNavHidden())} style={spring}>
          <Logo />
          <ExitCross >&#10005;</ExitCross>
        </SideNavHeader>

        <NavOptions />
      </SideNavCont>
    ))
  );
}

const mapStateToProps = createStructuredSelector({
  sideNavHidden: selectSideNavHidden
});

export default connect(mapStateToProps)(SideNav);