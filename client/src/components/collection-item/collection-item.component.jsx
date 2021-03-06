import React from 'react';
import { withRouter } from 'react-router-dom';

import { CollectionItemCont, CollectionItemContent } from './collection-item.styles'

const CollectionItem = ({ item: {imageUrl}, routing, history, match, animation, ...props}) => {
  return (  
    <CollectionItemCont style={animation} onClick={() => history.push(`/shop?collection=${routing}`)} imageUrl={imageUrl} {...props}>
      <CollectionItemContent className='collection-item-content'>
        See Collection 
      </CollectionItemContent>
    </CollectionItemCont>
  );
}
 
export default withRouter(CollectionItem);