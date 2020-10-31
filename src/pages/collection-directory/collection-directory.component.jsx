import React from 'react';

import DirectoryItem from '../../components/directory-item/directory-item.component';
import SearchItems from '../../components/search-items/search-items.component';
import CollectionPage from '../collections/collections.component'

import plantShop from '../../assets/plant-shop.jpg';

import { CollectionDirectoryCont, DirectoryGrid } from "./collection-directory.styles";

const CollectionDirectory = (props) => {
  return ( 
    
    <div>
      <CollectionDirectoryCont>
        <DirectoryGrid>
          <DirectoryItem backgroundImage={plantShop} number='one' title='Plants' linkUrl='/plants'> </DirectoryItem>
          <DirectoryItem backgroundImage={plantShop} number='two' title='Pots' linkUrl='/pots'></DirectoryItem>
          <DirectoryItem backgroundImage={plantShop}  number='three' title='Cacti' linkUrl='/cacti'></DirectoryItem>
          <div className='four'>
            <SearchItems />
          </div>
        </DirectoryGrid>
      </CollectionDirectoryCont>

      <CollectionPage/>
    </div>
  );
}
 
export default CollectionDirectory;