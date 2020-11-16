import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCollectionItems } from '../../redux/shop/shop.selectors';

import MenuItem from '../../components/menu-item/menu-item.component';
import ShopFilter from '../../components/shop-filter/shop-filter.component';
import SortByFilter from '../../components/sort-by-filter/sort-by-filter.component';

import { ShopPageCont, ShopPageHeader, ShopMainCont, ShopGridCont, ShopFooterCont, DownArrowCont } from './shop.styles'

const ShopPage = ({ items, location }) => {
  
  const [sortBy, toggleSortBy] = useState(false);
  console.log(location.search)
  // const collectionType = location.search()
  return ( 
    <ShopPageCont>  

      <ShopPageHeader>
        <span className='collection-type'>Collection Type</span>
        <span className='sort-by'>Sort by <DownArrowCont onClick={() => toggleSortBy(!sortBy)}/></span>
        {
          sortBy ? (<SortByFilter />) : null
        }
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

export default withRouter(connect(mapStateToProps)(ShopPage));