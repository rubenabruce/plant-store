import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';

import { downloadFiles } from '../../firebase/firebase.utils';

import { ItemImagesCont, MainImageCont, MainImage, OtherImagesNavCont, OtherImagesCont, OtherImage, Images } from "./item-page-images.styles";

const ItemPageImages = ({ images }) => {
  const [imageUrls, setImageUrls] = useState([]);
  
  console.log('itempageimages', images);
  console.log('itempageimages', imageUrls);

  useEffect(() => {
    setImageUrls([])
    images.forEach(imageRef => {
      downloadFiles(imageRef)
        .then(imageUrl =>  setImageUrls(oldArr => [...oldArr, imageUrl]))
        .catch(e => console.log(e))
    })
  }, [images]);

  return ( 
    <ItemImagesCont>
      <AwesomeSlider className='aws-btn' animation="scaleOutAnimation"  cssModule={[CoreStyles, AwesomeSliderStyles]}>
        {
          imageUrls.map((imageUrl, index) => 
            <Images key={index} data-src={imageUrl} />
          )
        }
      </AwesomeSlider>
    </ItemImagesCont>
  );
};
 


// <OtherImagesNavCont>
// <OtherImagesCont>
//   {
//     imageUrls.map((imageUrl, index) => 
//       <OtherImage key={index} src={imageUrl} />
//     )
//   }
// </OtherImagesCont>
// </OtherImagesNavCont>
export default ItemPageImages;