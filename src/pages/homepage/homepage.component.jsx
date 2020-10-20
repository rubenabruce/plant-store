import React from 'react';

import DirectoryMenu from '../../components/hompage/directory-menu/directory-menu.component'

import './homepage.styles.scss';

const Homepage = () => {
  return ( 
    <div className='homepage'>
      <DirectoryMenu />

      <div className='reviews'/>

      <div className='featured'> 
        <div className='featured-item'/>
        <div className='featured-item'/>
        <div className='featured-item'/>
      </div>

    </div>
  );
}
 
export default Homepage;