import React, {Component} from 'react';

import SHOP_DATA from './shop.data';

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collection: SHOP_DATA
    }
  }
  render() { 
    return ( 
      <div>Collection Page</div>
    );
  }
}
 
export default CollectionPage;