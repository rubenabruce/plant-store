import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { downloadFiles } from '../../firebase/firebase.utils';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

import { CartItemCont, ItemCont, ItemDetailsCont, NamePriceCont, RowCont, BinCont, QuantityCont, ArrowCont, ValueCont} from "./cart-item.styles";

const CartItem = ({item, animations, itemImageSize, clearItem, addItem, removeItem, checkoutOptions}) => {
  const [image, setImage] = useState('');
  const {images, price, name, quantity} = item;
    
  useEffect(() => {
    if (images) {
      downloadFiles(images[0])
        .then(imageUrl => setImage(imageUrl))
        .catch(e => console.log(`error in useEffect: ${e}`))
    } else {
      setImage(null)
    }
  }, [images]);

  return (
  <CartItemCont style={animations}>
    <ItemCont itemImageSize={itemImageSize} src={image} alt='item'/>
    <ItemDetailsCont checkoutOptions={checkoutOptions}>
      <RowCont className='item-name'>
        <NamePriceCont >{name}</NamePriceCont>
        {
          checkoutOptions ? (
            null
          ) : (
            <NamePriceCont>£{price}</NamePriceCont>
          )
        }
      </RowCont>
      {
        checkoutOptions ? (
            <div>
              <NamePriceCont>{quantity} x </NamePriceCont>
              <NamePriceCont>£{price}</NamePriceCont>
            </div>
          ) : (
            <RowCont>
              <BinCont onClick={() => clearItem(item)}/>
              <QuantityCont>
                <ArrowCont onClick={() => removeItem(item)}>&#10094;</ArrowCont>
                <ValueCont>{quantity}</ValueCont>
                <ArrowCont onClick={() => addItem(item)}>&#10095;</ArrowCont>
              </QuantityCont>
            </RowCont>
        )
      }
    </ItemDetailsCont>
  </CartItemCont>
)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);