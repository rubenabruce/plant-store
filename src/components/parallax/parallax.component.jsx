import React from 'react';

import { ParallaxImage, ContentCont } from "./parallax.styles";

const Parallax = ({imageUrl, children}) => {
  console.log(children)
  return ( 
    <ParallaxImage imageUrl={imageUrl}>
      <ContentCont>
        {children}
      </ContentCont>
    </ParallaxImage>
  );
}
 
export default Parallax;