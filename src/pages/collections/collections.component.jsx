import React, {Component} from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

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
      <div className='collection-page'>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}
 
export default CollectionPage;