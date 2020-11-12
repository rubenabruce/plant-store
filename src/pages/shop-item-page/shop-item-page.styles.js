import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

const ShopItemPage = ({ item }) => {
  return ( 
    <div className='shop-item-page-cont'>

      <div className='shop-item'>
        
        <div className='item-images'>

          <div className='main-image' />

          <div className='other-images-cont'>

            <span className='arrow' />

            <div className='other-images'>

            </div>

            <span className='arrow' />


          </div>

        </div>

        <div className='item-desc'>

          <h2>Snake Plant</h2>

          <h4>Price</h4>

          <div className='item-sizes'>
            <span className='height'></span>
            <span className='diameter'></span>
          </div>

          <p className='item-desc'></p>

          <div className='quantity-container'>
            <span>Quantity</span>
            <div className='quantity-adjust' />
          </div>

          <CustomButton>Add to cart</CustomButton>



        </div>

      </div>

      <div className='recommended-cont'></div>

    </div>
  );
}
 
export default ShopItemPage;