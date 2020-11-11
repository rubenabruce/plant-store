import React from 'react';

import { CollectionItemCont, CollectionItemContent } from './collection-item.styles'

const CollectionItem = ({ item: { imageUrl }, gridId }) => {
  return (  
    <CollectionItemCont gridId={gridId} imageUrl={imageUrl}>
      <CollectionItemContent className='collection-item-content'>
        See Collection 
      </CollectionItemContent>
    </CollectionItemCont>
  );
}
 
export default CollectionItem;