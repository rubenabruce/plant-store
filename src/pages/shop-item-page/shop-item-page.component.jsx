import React from 'react';

import ItemPageImages from '../../components/item-page-images/item-page-images.component';
import ItemPageDetails from '../../components/item-page-details/item-page-details.component';
import SlidingBar from '../../components/sliding-bar/sliding-bar.component';

import { ShopItemPageCont, ShopItemCont, RecommendedContainer } from './shop-item-page.styles';

const ShopItemPage = () => {
  const item = {
    id: 10,
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    name: "Brown Brim",
    price: 25
  }
  return ( 
    <ShopItemPageCont>

      <ShopItemCont>
        
        <ItemPageImages />

        <ItemPageDetails item={item} />

      </ShopItemCont>

      <RecommendedContainer>
        <SlidingBar>

        </SlidingBar>
      </RecommendedContainer>

    </ShopItemPageCont>
  );
}
 
export default ShopItemPage;
