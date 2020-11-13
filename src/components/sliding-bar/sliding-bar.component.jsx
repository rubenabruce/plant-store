import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/shop/shop.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { SlidingBarCont } from "./sliding-bar.styles";

const SlidingBar = ({ collectionItems }) => {
  return (  
    <SlidingBarCont>
      {
        collectionItems
        .filter((item, index) => index < 6)
        .map((item) => <MenuItem key={item.id} item={item}/>)
      }
    </SlidingBarCont>
  );
}
 
const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems
});

export default connect(mapStateToProps)(SlidingBar);