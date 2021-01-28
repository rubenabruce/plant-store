import React, { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { downloadFiles, storage } from '../../firebase/firebase.utils';
import { addItem } from '../../redux/cart/cart.actions'
import { cartNotificationShow } from '../../redux/shop/shop.actions'

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont, CustomButtonCont } from "./menu-item.styles";

const MenuItem = ({ item, addItem, history, match, animation, cartNotificationShow}) => {
  const [image, setImage] = useState();
  
  const {id, images, name, price} = item;
  let imageRef = images[0];
  
  useEffect(() => {
    downloadFiles(imageRef)
      .then(imageUrl => setImage(imageUrl))
      .catch(e => console.log(e))
  }, [imageRef]);

  return (
    <MenuItemCont style={animation} className='menu-item'>
      <ImageContainerCont onClick={() => { history.push(`/shop/${id}`); window.location.reload(false); window.scrollTo(0, 0); }} className='background-image-cont'>
        <ImageCont className='background-image' imageUrl={image} />
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
