import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions'
import { cartNotificationShow } from '../../redux/shop/shop.actions'

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont, CustomButtonCont } from "./menu-item.styles";

const MenuItem = ({ item, addItem, history, match, animation, cartNotificationShow}) => {
  const {id, imageUrl, name, price} = item;
  return (
    <MenuItemCont style={animation} className='menu-item'>
      <ImageContainerCont onClick={() => history.push(`${match.path}/${id}`)} className='background-image-cont'>
        <ImageCont className='background-image' imageUrl={imageUrl} />
      </ImageContainerCont>
      <ItemFooterCont className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
      </ItemFooterCont>
      <CustomButtonCont onClick={() => {addItem(item); cartNotificationShow();}} className='custom-button'>Add to cart</CustomButtonCont>

    </MenuItemCont>
  ); 
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  cartNotificationShow: () => dispatch(cartNotificationShow())
});
 
export default withRouter(connect(null, mapDispatchToProps)(MenuItem));
