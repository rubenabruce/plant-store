import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { storage } from '../../firebase/firebase.utils';
import { addItem } from '../../redux/cart/cart.actions'
import { cartNotificationShow } from '../../redux/shop/shop.actions'

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont, CustomButtonCont } from "./menu-item.styles";

const MenuItem = ({ item, addItem, history, match, animation, cartNotificationShow}) => {
  const [image, setImage] = useState();

  const {id, images, name, price} = item;
  let imageRef = images[0];
  const storageRef = storage.ref();
  
  useEffect(() => {
    storageRef.child(imageRef).getDownloadURL()
      .then((url) => {
        console.log('url', url);
        imageUrl = url;
        setImage(imageUrl)
      })
      .catch((error) => {
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            console.log('Error Code:', error.code);
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log('Error Code:', error.code);
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.log('Error Code:', error.code);
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            console.log('Error Code:', error.code);
            break;
          default:
            break;
        }
      })

  })

  let imageUrl;
  
  console.log('storageRef child = ', storageRef.child(imageRef));

  return (
    <MenuItemCont style={animation} className='menu-item'>
      <ImageContainerCont onClick={() => {history.push(`/shop/${id}`); window.scrollTo(0, 0)} } className='background-image-cont'>
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
