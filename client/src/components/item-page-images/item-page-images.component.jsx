import React from 'react';

import plantImg from '../../assets/snake-plant.jpg';

import { ItemImagesCont, MainImageCont, MainImage, OtherImagesNavCont, OtherImagesCont, OtherImage } from "./item-page-images.styles";

const ItemPageImages = ({ item }) => {
  return ( 
    <ItemImagesCont>

      <MainImageCont>
        <MainImage src={plantImg}/>
      </MainImageCont>

      <OtherImagesNavCont>
        <OtherImagesCont>
          <OtherImage src={plantImg} />
          <OtherImage src={plantImg} />
          <OtherImage src={plantImg} />
          <OtherImage src={plantImg} />
          <OtherImage src={plantImg} />
        </OtherImagesCont>
      </OtherImagesNavCont>

    </ItemImagesCont>
  );
}
 
export default ItemPageImages;