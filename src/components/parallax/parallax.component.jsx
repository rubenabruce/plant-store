import React from 'react';

import { ParallaxImage} from "./parallax.styles";

const Parallax = ({imageUrl, children}) => {
  console.log(children)
  return ( 
    <ParallaxImage imageUrl={imageUrl}>
      {children}
    </ParallaxImage>
  );
}
 
export default Parallax;