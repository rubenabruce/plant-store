import React from 'react';

import ItemPageImages from '../../components/item-page-images/item-page-images.component';
import ItemPageDetails from '../../components/item-page-details/item-page-details.component';
import SlidingBar from '../../components/sliding-bar/sliding-bar.component';
// import MenuItem from '../../components/menu-item/menu-item.component';

import { ShopItemPageCont, ShopItemCont, RecommendedContainer } from './shop-item-page.styles';

const ShopItemPage = ({ item }) => {
  return ( 
    <ShopItemPageCont>

      <ShopItemCont>
        
        <ItemPageImages />

        <ItemPageDetails />

      </ShopItemCont>

      <RecommendedContainer>
        <SlidingBar>

        </SlidingBar>
      </RecommendedContainer>

    </ShopItemPageCont>
  );
}
 
export default ShopItemPage;
