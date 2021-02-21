import React, { useState } from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions';
import { cartNotificationShow } from '../../redux/shop/shop.actions';

import { ItemDetailsCont, ItemName, ItemPrice, ItemSizes, ItemDesc,  CustomButtonCont, QuantityCont, QuantityAdjustCont, ArrowCont, ValueCont, CareInstructionCont } from "./item-page-details.styles";

const ItemPageDetails = ({ item, addItem, cartNotificationShow }) => {
  const [shopItem, setShopItem] = useState({
    ...item,
    quantity: 1
  })
  const inStock = item.stock >= 1 ? true : false;
  console.log(shopItem)
  
  const { name, latinName, potsize, price, height, id, stock } = item;



  return (
    <ItemDetailsCont>
      <ItemName>{name}</ItemName>
      <ItemPrice>£{price}</ItemPrice>

      <ItemSizes>
        <span className='height'>Plant Height: <b>{height}cm</b></span>
        <span className='diameter'>Pot Diameter: <b>{potsize}cm</b></span>
      </ItemSizes>

      <ItemDesc className='item-desc'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</ItemDesc>

      <QuantityCont>
        <span><b>Quantity:</b></span>
        <QuantityAdjustCont>
          <ArrowCont onClick={() => setShopItem({...shopItem, quantity: shopItem.quantity - 1 ? shopItem.quantity - 1 : shopItem.quantity})}>&#10094;</ArrowCont>
          <ValueCont>{inStock ? shopItem.quantity : 0}</ValueCont>
          <ArrowCont onClick={() => setShopItem({...shopItem, quantity: shopItem.quantity == shopItem.stock ? shopItem.stock : shopItem.quantity + 1})}>&#10095;</ArrowCont>
        </QuantityAdjustCont>
      </QuantityCont>

      <CustomButtonCont disabled={!inStock} onClick={() => {addItem(shopItem); cartNotificationShow()}} className='custom-button'>{ inStock ? 'Add to cart' : 'Not available'}</CustomButtonCont>

      <CareInstructionCont>
        <h2>How to care for:</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
        dignissim elementum.</p>
      </CareInstructionCont>

    </ItemDetailsCont>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  cartNotificationShow: () => dispatch(cartNotificationShow())
});
  
export default connect(null, mapDispatchToProps)(ItemPageDetails);