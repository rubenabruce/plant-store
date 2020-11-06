import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionItems } from '../../redux/shop/shop.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';

import { ShopPageCont, ShopMainCont, ShopGridCont, ShopFilterCont } from './shop.styles'

const ShopPage = ({ items }) => {
  return ( 
    <ShopPageCont>

      <div className='shop-page-header'>
        <span>Collection Type</span>
        <span>Sort by </span>
        <div className='sort-by-dropdown'></div>
      </div>

      <ShopMainCont>

        <ShopFilterCont></ShopFilterCont>

        <ShopGridCont>
          {items
            .filter((item, idx) => idx < 10)
            .map(item => (
              <MenuItem key={item.id} item={item}>{item.name}</MenuItem>
            ))
          }
        </ShopGridCont>

        

      </ShopMainCont>
      <div className='shop-footer'>1 2 3</div>
    </ShopPageCont>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCollectionItems
});

export default connect(mapStateToProps)(ShopPage);