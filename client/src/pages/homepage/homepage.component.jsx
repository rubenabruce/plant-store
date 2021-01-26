import React from 'react';
import { animated, useSpring } from 'react-spring';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component'
import Parallax from '../../components/parallax/parallax.component'
import FeaturedSection from '../../components/featured-section/featured-section.component';
import ContactSection from '../../components/contact-section/contact-section.component';

import './homepage.styles.scss';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const Homepage = () => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

  return ( 
    <animated.div style={fade} className='homepage'>
      <DirectoryMenu />

      <Parallax imageUrl='https://cdn.shopify.com/s/files/1/1802/1289/files/FOREST_17-46_1024x1024.jpg?v=1496927395' header='A review about ninas plants ya danoooooo' para='Ruben Aaronovitch-Bruce'>
        <h2>"A review about ninas plants"</h2>
        <span>Ruben Aaronovitch-Bruce</span>
      </Parallax>

      <FeaturedSection/>

      <Parallax imageUrl='https://cdn.shopify.com/s/files/1/1802/1289/files/FOREST_17-46_1024x1024.jpg?v=1496927395' header='A review about ninas plants ya danoooooo' para='Ruben Aaronovitch-Bruce'>
        <h2>"A review about ninas plants"</h2>
        <span>Ruben Aaronovitch-Bruce</span>
      </Parallax>

      <ContactSection />
        
    </animated.div>
  );
}
 
export default Homepage;