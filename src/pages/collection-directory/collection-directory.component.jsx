import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { CollectionDirectoryCont, CollectionCont } from "./collection-directory.styles";

const CollectionDirectory = (props) => {
  return ( 
    <CollectionDirectoryCont>
      <CollectionCont id='1'>
        <div className='collection-item-content'>
          <span>Collection Item</span>
        </div>
      </CollectionCont>
      <CollectionCont id='2' >
        <div className='collection-item-content'>
          <span>Collection Item</span>
        </div>
      </CollectionCont>
      <CollectionCont id='3' className='collection'>
        <div className='collection-item-content'>
          <span>Collection Item</span>
        </div>
      </CollectionCont>
      <CollectionCont id='4' className='collection'>
        <div className='collection-search'>
          <span>Search in collections</span>
          <input type='text' placeholder='Search in collections'></input>
          <CustomButton></CustomButton>
        </div>
      </CollectionCont>
    </CollectionDirectoryCont>
  );
}
 
export default CollectionDirectory;