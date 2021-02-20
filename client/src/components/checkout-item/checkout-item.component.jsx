import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { downloadFiles } from '../../firebase/firebase.utils';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemCont, 
  ImageContainerCont,
  NameCont,
  QuantityCont,
  ArrowCont,
  ValueCont,
  PriceCont,
  RemoveButtonCont 
} from "./checkout-item.styles";

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {
  const [image, setImage] = useState();
  const {images, price, name, quantity} = item;

  let imageRef = images[0];
  
  useEffect(() => {
    downloadFiles(imageRef)
      .then(imageUrl => setImage(imageUrl))
      .catch(e => console.log(e))
  }, [imageRef]);

  return (
    <CheckoutItemCont>
      <ImageContainerCont>
        <img src={image} alt='item'/>
      </ImageContainerCont>
      <NameCont>{name}</NameCont>
      <QuantityCont>
        <ArrowCont onClick={() => removeItem(item)}>&#10094;</ArrowCont>
        <ValueCont>{quantity}</ValueCont>
        <ArrowCont onClick={() => addItem(item)}>&#10095;</ArrowCont>
      </QuantityCont>
      <PriceCont>£{price}</PriceCont>
      <RemoveButtonCont onClick={() => clearItem(item)}>&#10005;</RemoveButtonCont>
    </CheckoutItemCont>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);