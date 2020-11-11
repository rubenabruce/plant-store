import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionItems } from '../../redux/shop/shop.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';
import ShopFilter from '../../components/shop-filter/shop-filter.component';
import {ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

import { ShopPageCont, ShopPageHeader, ShopMainCont, ShopGridCont, ShopFooterCont } from './shop.styles'

const ShopPage = ({ items }) => {
  return ( 
    <ShopPageCont>

      <ShopPageHeader>
        <span className='collection-type'>Collection Type</span>
        <span className='sort-by'>Sort by <DownArrow /></span>
      </ShopPageHeader>

      <ShopMainCont>

        <ShopFilter />

        <ShopGridCont>
          {items
            .filter((item, idx) => idx < 10)
            .map(item => (
              <MenuItem  key={item.id} item={item}>{item.name}</MenuItem>
            ))
          }
        </ShopGridCont>

      </ShopMainCont>
      <ShopFooterCont>1    2    3</ShopFooterCont>
    </ShopPageCont>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCollectionItems
});

export default connect(mapStateToProps)(ShopPage);