import React from 'react';

import { InstagramSectionCont, TitleCont, InstafeedCont } from "./instagram-section.styles";

const InstagramSection = () => {

  return (  
    <InstagramSectionCont>
      <TitleCont>Follow us <a href='https://www.instagram.com/ninasplantsofficial/'>@NinasPlantsOfficial</a></TitleCont>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      <InstafeedCont id='instafeed'>
        <img src='https://picsum.photos/170' alt='instagram' />
        <img src='https://picsum.photos/170' alt='instagram' />
        <img src='https://picsum.photos/170' alt='instagram' />
        <img src='https://picsum.photos/170' alt='instagram' />
        <img src='https://picsum.photos/170' alt='instagram' />
        <img src='https://picsum.photos/170' alt='instagram' />
      </InstafeedCont>
    </InstagramSectionCont>
  );
}
 
export default InstagramSection;