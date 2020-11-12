import React from 'react';

import { SlidingBarCont } from "./sliding-bar.styles";

const SlidingBar = ({ children }) => {
  return (  
    <SlidingBarCont>
      {
        children
      }
    </SlidingBarCont>
  );
}
 
export default SlidingBar;