import React, { useState } from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions';

import { ItemDetailsCont, ItemName, ItemPrice, ItemSizes, CustomButtonCont, QuantityCont, QuantityAdjustCont, ArrowCont, ValueCont, CareInstructionCont } from "./item-page-details.styles";

const ItemPageDetails = ({ item, addItem }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ItemDetailsCont>
      <ItemName>Snake Plant</ItemName>
      <ItemPrice>£12</ItemPrice>

      <ItemSizes>
        <span className='height'>Plant Height: 30cm</span>
        <span className='diameter'>Pot Diameter: 12cm</span>
      </ItemSizes>

      <p className='item-desc'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</p>

      <QuantityCont>
        <span>Quantity:</span>
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