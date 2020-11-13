import React from 'react';

import { CollectionItemCont, CollectionItemContent } from './collection-item.styles'

const CollectionItem = ({ item: {imageUrl}, ...props}) => {
  return (  
    <CollectionItemCont imageUrl={imageUrl} {...props}>
      <CollectionItemContent className='collection-item-content'>
        See Collection 
      </CollectionItemContent>
    </CollectionItemCont>
  );
}
 
export default CollectionItem;