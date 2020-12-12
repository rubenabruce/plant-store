import React, { useState } from 'react';
import { config, useSpring, useTransition } from 'react-spring';
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
  const dropdownTransition = useTransition(sortBy, null, {
    from: { height: '0px' },
    enter: { height: '300px' },
    leave: { height: '0px' },
    config: config.slow
  })

  const itemsTransition = useTransition(items, item => item.id, {
    trail: 100,
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)'},
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)'},
    leave: { opacity: 0, transform: 'translate3d(0, 100%, 0)'}
  })

  const headerSpring = useSpring({
    from: {opacity: 0, transform: 'translate3d(50%, 0, 0)'}, to: {opacity: 1, transform: 'translate3d(0, 0, 0)'}, config: config.slow
  })
  
  const filterSpring = useSpring({
    from: {opacity: 0, transform: 'translate3d(0, 50%, 0)'}, to: {opacity: 1, transform: 'translate3d(0, 0, 0)'}, config: config.slow
  })

  console.log(location.search)
  // const collectionType = location.search()
  return ( 
    <ShopPageCont>  

      <ShopPageHeader style={headerSpring}>
        <span className='collection-type'>Collection Type</span>
        <span className='sort-by'>Sort by <DownArrowCont onClick={() => toggleSortBy(!sortBy)} style={ sortBy ? { transform: 'rotate(180deg)' } : {  transform: 'rotate(0deg)' } }/></span>
        {
          dropdownTransition.map(({item, key, props: animation}) => (
            item && <SortByFilter key={ key } animation={ animation } />
          )) 
        }
      </ShopPageHeader>

      <ShopMainCont>

        <ShopFilter animation={filterSpring}/>

        <ShopGridCont>
          {itemsTransition
            .filter((item, idx) => idx < 10)
            .map(({item, key, props: animation}) => (
              <MenuItem animation={animation} key={key} item={item}>{item.name}</MenuItem>
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