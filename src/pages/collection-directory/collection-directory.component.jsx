import React from 'react';

import DirectoryItem from '../../components/directory-item/directory-item.component';
import SearchItems from '../../components/search-items/search-items.component';

import plantShop from '../../assets/plant-shop.jpg';

import { CollectionDirectoryCont, DirectoryGrid } from "./collection-directory.styles";

const CollectionDirectory = (props) => {
  return ( 
    
    <CollectionDirectoryCont>
      <DirectoryGrid>
        <DirectoryItem backgroundImage={plantShop} number='one' title='Plants'> </DirectoryItem>
        <DirectoryItem backgroundImage={plantShop} number='two' title='Pots'></DirectoryItem>
        <DirectoryItem backgroundImage={plantShop}  number='three' title='Cacti'></DirectoryItem>
        <div className='four'>
          <SearchItems />
        </div>
      </DirectoryGrid>
    </CollectionDirectoryCont>
  );
}
 
export default CollectionDirectory;