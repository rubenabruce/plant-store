import React from 'react';

import { ItemDetailsCont, ItemName, ItemPrice, ItemSizes, CustomButtonCont, QuantityCont, QuantityAdjustCont, ArrowCont, ValueCont } from "./item-page-details.styles";

const ItemPageDetails = () => {
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
          <ArrowCont>&#10094;</ArrowCont>
          <ValueCont>1</ValueCont>
          <ArrowCont>&#10095;</ArrowCont>
        </QuantityAdjustCont>
      </QuantityCont>

      <CustomButtonCont>Add to cart</CustomButtonCont>

      <div className='care-instuctions'>
        <h2>How to care for:</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
        dignissim elementum.</p>
      </div>

    </ItemDetailsCont>
  );
}
 
export default ItemPageDetails;