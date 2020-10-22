import React, {Component} from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { CollectionPageCont } from './collections.styles'

import SHOP_DATA from './shop.data';

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collections: SHOP_DATA
    }
  }
  render() { 
    const { collections } = this.state;
    console.log(collections)
    return ( 
      <CollectionPageCont>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </CollectionPageCont>
    );
  }
}
 
export default CollectionPage;