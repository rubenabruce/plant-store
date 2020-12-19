import React from 'react';

import { LogoContainer, LogoImg } from "./logo.styles";

const Logo = () => {
  return (  
    <LogoContainer to='/'>
      <LogoImg src={require('../../assets/plants-logo-25.png')} alt="Nina's plants shop logo." />
    </LogoContainer>
  );
}
 
export default Logo;