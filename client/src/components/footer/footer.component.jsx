import React from 'react';
import { config, useSpring } from "react-spring";

import { FooterCont, NavCont, LinkCont, InstaCont, TitleCont } from "./footer.styles";

const Footer = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    }, 
    to: {
      opacity: 1
    }, 
    config: config.slow
  })

  return ( 
    <FooterCont style={fade}>
      <InstaCont style={{flexDirection: 'column'}}>
        <TitleCont>Follow us <a href='https://www.instagram.com/ninasplantsofficial/'>@NinasPlantsOfficial</a></TitleCont>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </InstaCont>
      <NavCont>
        <LinkCont to='/contact'>Contact Us</LinkCont>
        <LinkCont to='/delivery'>Delivery</LinkCont>
        <LinkCont to='/tnc'>Terms and Conditions</LinkCont>
      </NavCont>      
    </FooterCont>  
  );
}
 
export default Footer;