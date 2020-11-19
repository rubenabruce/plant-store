import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/shop/shop.selectors';

import ItemPageImages from '../../components/item-page-images/item-page-images.component';
import ItemPageDetails from '../../components/item-page-details/item-page-details.component';
import SlidingBar from '../../components/sliding-bar/sliding-bar.component';
import MenuItem from '../../components/menu-item/menu-item.component';

import { ShopItemPageCont, ShopItemCont, RecommendedContainer, RecommendedHeader } from './shop-item-page.styles';

const ShopItemPage = ({ collectionItems }) => {
  const item = {
    id: 10,
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    otherImageUrls: ["https://i.ibb.co/ZYW3VTp/brown-brim.png", "https://i.ibb.co/ZYW3VTp/brown-brim.png", "https://i.ibb.co/ZYW3VTp/brown-brim.png", "https://i.ibb.co/ZYW3VTp/brown-brim.png", "https://i.ibb.co/ZYW3VTp/brown-brim.png", "https://i.ibb.co/ZYW3VTp/brown-brim.png"],
    name: "Brown Brim",
    price: 25
  }
  return ( 
    <ShopItemPageCont>

      <ShopItemCont>
        
        <ItemPageImages item={item}/>

        <ItemPageDetails item={item} />

      </ShopItemCont>

      <RecommendedContainer>
        <RecommendedHeader>You might also like...</RecommendedHeader>
        <SlidingBar data={collectionItems
          .filter((item, index) => index < 6)
          .map((item) => <MenuItem key={item.id} item={item}/>)}>

        </SlidingBar>
      </RecommendedContainer>

    </ShopItemPageCont>
  );
}

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems
});
 
export default connect(mapStateToProps)(ShopItemPage);
