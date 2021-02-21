import React, { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { downloadFiles, storage } from '../../firebase/firebase.utils';
import { addItem } from '../../redux/cart/cart.actions'
import { cartNotificationShow } from '../../redux/shop/shop.actions'

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont, CustomButtonCont, HeightPriceCont, OOSLabel } from "./menu-item.styles";

const MenuItem = ({ item, addItem, history, animation, cartNotificationShow}) => {
  const [image, setImage] = useState();
  
  const {id, images, height, name, price, stock} = item;
  let imageRef = images[0];
  
  useEffect(() => {
    downloadFiles(imageRef)
      .then(imageUrl => setImage(imageUrl))
      .catch(e => console.log(e))
  }, [imageRef]);

  return (
    <MenuItemCont style={animation} className='menu-item'>
      {
        stock >= 1 ? (
          null
        ) : (
          <OOSLabel>Out of stock</OOSLabel>
        )
      }
      <ImageContainerCont onClick={() => { history.push(`/shop/${id}`); window.scrollTo(0, 0); }} className='background-image-cont'>
        <ImageCont className='background-image' imageUrl={image} />
      </ImageContainerCont>
      <ItemFooterCont className='item-footer'>
        <span className='name'>{name}</span>
        <HeightPriceCont> 
          <span className='height-price height'>{height}cm</span>
          <span className='height-price price'>£{price}</span>
        </HeightPriceCont>
      </ItemFooterCont>
      {
        stock >= 1 ? (
          <CustomButtonCont onClick={() => {addItem(item); cartNotificationShow();}} className='custom-button'>Add to cart</CustomButtonCont>
        ) : (
          <CustomButtonCont disabled className='custom-button'>Out of stock</CustomButtonCont>
        )
      }

    </MenuItemCont>
  ); 
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  cartNotificationShow: () => dispatch(cartNotificationShow())
});
 
export default withRouter(connect(null, mapDispatchToProps)(MenuItem));
