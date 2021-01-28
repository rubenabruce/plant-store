import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { selectCollectionItemById, selectCollectionItems } from '../../redux/shop/shop.selectors';

import ItemPageImages from '../../components/item-page-images/item-page-images.component';
import ItemPageDetails from '../../components/item-page-details/item-page-details.component';
import SlidingBar from '../../components/sliding-bar/sliding-bar.component';
import MenuItem from '../../components/menu-item/menu-item.component';

import { ShopItemPageCont, ShopItemCont, RecommendedContainer, RecommendedHeader } from './shop-item-page.styles';
// import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

const ShopItemPage = ({ item, collectionItems }) => {
  const [currentItem, setCurrentItem] = useState(item);
  
  if (item !== currentItem) {
    setCurrentItem(item)
  }
  
  console.log(currentItem);
  return ( 
    <ShopItemPageCont>

      <ShopItemCont>
        
        <ItemPageImages images={currentItem.images}/>

        <ItemPageDetails item={currentItem} />

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

const mapStateToProps = (state, ownProps) => ({
  item: selectCollectionItemById(ownProps.match.params.itemId)(state),
  collectionItems: selectCollectionItems(state)
});
 
export default connect(mapStateToProps)(ShopItemPage);
