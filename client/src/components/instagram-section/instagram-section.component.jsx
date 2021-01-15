import React from 'react';
import { animated, useTrail } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import { InstagramSectionCont, TitleCont, InstafeedCont, InstaImage } from "./instagram-section.styles";

const InstagramSection = () => {

  const [trail, set] = useTrail(6, () => ({ 
    from: { opacity: 0, transform: 'scale(0.3)' }, 
     
  }));

  const onEnter = () => {
    set({opacity: 1, transform: 'scale(1)'})
  };

  const onLeave = () => {
    set({opacity: 0, transform: 'scale(0.3)'})
  };

  return (  
    <Waypoint scrollableAncestor={window} onEnter={onEnter} onLeave={onLeave}>
      <InstagramSectionCont>
        <TitleCont>Follow us <a href='https://www.instagram.com/ninasplantsofficial/'>@NinasPlantsOfficial</a></TitleCont>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <InstafeedCont id='instafeed'>
          {
            trail.map((animation, i) => (<InstaImage style={animation} key={i} src='https://picsum.photos/170' alt='instagram' />))
          }
        </InstafeedCont>
      </InstagramSectionCont>
    </Waypoint>
  );
}
 
export default InstagramSection;