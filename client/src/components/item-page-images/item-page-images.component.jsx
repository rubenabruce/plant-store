import React, { useEffect, useState } from 'react';
import { downloadFiles } from '../../firebase/firebase.utils';

import { ItemImagesCont, MainImageCont, MainImage, OtherImagesNavCont, OtherImagesCont, OtherImage } from "./item-page-images.styles";

const ItemPageImages = ({ images }) => {
  const [imageUrls, setImageUrls] = useState([]);

  console.log('itempageimages', images)
  console.log('itempageimages', imageUrls)


  useEffect(() => {
    images.forEach(imageRef => {
      downloadFiles(imageRef)
        .then(imageUrl => setImageUrls(oldArr => [...oldArr, imageUrl]))
        .catch(e => console.log(e))
      });
  }, []);

  return ( 
    <ItemImagesCont>

      <MainImageCont>
        <MainImage src={imageUrls[0]}/>
      </MainImageCont>

      <OtherImagesNavCont>
        <OtherImagesCont>
          {
            imageUrls.map((imageUrl, index) => 
              <OtherImage key={index} src={imageUrl} />
            )
          }
        </OtherImagesCont>
      </OtherImagesNavCont>

    </ItemImagesCont>
  );
}
 
export default ItemPageImages;