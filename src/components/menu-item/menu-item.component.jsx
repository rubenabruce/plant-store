import React from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions'

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont, CustomButtonCont } from "./menu-item.styles";

const MenuItem = ({ item, addItem }) => {
  const {imageUrl, name, price} = item
  return (
    <MenuItemCont>
      <ImageContainerCont className='background-image-cont'><ImageCont className='background-image' imageUrl={imageUrl} /></ImageContainerCont>
      <ItemFooterCont className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
        <CustomButtonCont onClick={() => addItem(item)} className='custom-button'>Add to cart</CustomButtonCont>
      </ItemFooterCont>
    </MenuItemCont>
  ); 
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
 
export default connect(null, mapDispatchToProps)(MenuItem);
