import React, { useState } from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions';

import { ItemDetailsCont, ItemName, ItemPrice, ItemSizes, ItemDesc,  CustomButtonCont, QuantityCont, QuantityAdjustCont, ArrowCont, ValueCont, CareInstructionCont } from "./item-page-details.styles";

const ItemPageDetails = ({ item, addItem }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ItemDetailsCont>
      <ItemName>Snake Plant</ItemName>
      <ItemPrice>£12</ItemPrice>

      <ItemSizes>
        <span className='height'>Plant Height: <b>30cm</b></span>
        <span className='diameter'>Pot Diameter: <b>12cm</b></span>
      </ItemSizes>

      <ItemDesc className='item-desc'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</ItemDesc>

      <QuantityCont>
        <span><b>Quantity:</b></span>
        <QuantityAdjustCont>
          <ArrowCont onClick={() => setQuantity(quantity - 1 ? quantity - 1 : quantity )}>&#10094;</ArrowCont>
          <ValueCont>{quantity}</ValueCont>
          <ArrowCont onClick={() => setQuantity(quantity + 1)}>&#10095;</ArrowCont>
        </QuantityAdjustCont>
      </QuantityCont>

      <CustomButtonCont onClick={() => addItem(item)} className='custom-button'>Add to cart</CustomButtonCont>

      <CareInstructionCont>
        <h2>How to care for:</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
        dignissim elementum.</p>
      </CareInstructionCont>

    </ItemDetailsCont>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
  
export default connect(null, mapDispatchToProps)(ItemPageDetails);