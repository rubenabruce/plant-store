import React from 'react';

import DirectoryMenu from '../../components/hompage/directory-menu/directory-menu.component'
import Parallax from '../../components/parallax/parallax.component'

import './homepage.styles.scss';

const Homepage = () => {
  return ( 
    <div className='homepage'>
      <DirectoryMenu />

      <Parallax imageUrl='https://cdn.shopify.com/s/files/1/1802/1289/files/FOREST_17-46_1024x1024.jpg?v=1496927395' header='A review about ninas plants ya danoooooo' para='Ruben Aaronovitch-Bruce'>
        <h2>A review about ninas plants ya danoooooo</h2>
        <span>Ruben Aaronovitch-Bruce</span>
      </Parallax>

      <div className='featured'> 
        <div className='featured-item'/>
        <div className='featured-item'/>
        <div className='featured-item'/>
      </div>

    </div>
  );
}
 
export default Homepage;