import React from 'react';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }
  render() { 
    return ( 
      <div className='shop-page'>
        <div className='shop-page-header'>
          <span>Collection Type</span>
          <span>Sort by </span>
        </div>

        <div className='shop-filtering'>
        </div>

        <div className='shop-main'>
          <div className='shop-grid'>
            <div className='menu-items'></div>
          </div>
          <div className='shop-footer'>
          1 2 3
        </div>
        </div>
        
      </div>
    );
  }
}
 
export default Shop;