import React from 'react';
import { withRouter } from 'react-router-dom';

import DirectoryItem from '../../components/directory-item/directory-item.component';
import SearchItems from '../../components/search-items/search-items.component';
import CollectionsOverviewCont from '../../components/collections-overview/collections-overview.component'

import plantShop from '../../assets/plant-shop.jpg';

import { CollectionDirectoryCont, DirectoryGrid } from "./collection-directory.styles";

const CollectionDirectory = ({ history }) => {
  return ( 
    
    <div>
    {
      history ? null : (<CollectionDirectoryCont>
        <DirectoryGrid>
          <DirectoryItem backgroundImage={plantShop} number='one' title='Plants' onClick={() => history.push('/shop')}> </DirectoryItem>
          <DirectoryItem backgroundImage={plantShop} number='two' title='Pots' linkUrl='/shop/pots'></DirectoryItem>
          <DirectoryItem backgroundImage={plantShop}  number='three' title='Cacti' linkUrl='/shop/cacti'></DirectoryItem>
          <div className='four'>
            <SearchItems />
          </div>
        </DirectoryGrid>
      </CollectionDirectoryCont>)
    }

      

      <CollectionsOverviewCont />
    </div>
  );
}
 
export default withRouter(CollectionDirectory);