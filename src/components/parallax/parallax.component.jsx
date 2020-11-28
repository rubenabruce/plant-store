import React from 'react';
import { useSpring, config } from 'react-spring';
import { Waypoint } from "react-waypoint";

import { ParallaxImage, ContentCont } from "./parallax.styles";

const Parallax = ({imageUrl, children}) => {
  const [props, set, stop] = useSpring(() => ({
    height: '10vh',
    config: config.slow
  }))

  const onEnter = () => {
    set({height: '40vh'})
  }

  const onLeave = () => {
    set({height: '10vh'})
  }

  return ( 
    <Waypoint onEnter={onEnter} onLeave={onLeave} >
      <ParallaxImage style={props} imageUrl={imageUrl}>
        <ContentCont>
          {children}
        </ContentCont>
      </ParallaxImage>
    </Waypoint>
  );
}
 
export default Parallax;