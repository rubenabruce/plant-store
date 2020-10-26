import React from 'react';


import { FeaturedItemCont, ContentCont, ImageCont,CustomButtonCont, TitleCont, ParagraphCont } from './featured-item.styles';

const FeaturedItem = ({ item: { id, title, paragraph, buttonUrl, imageUrl } }) => {
  return ( 
    <FeaturedItemCont id={id} >
      <ImageCont src={imageUrl} alt='Featured-item'/>
      <ContentCont id={id}>
        <TitleCont>{title}</TitleCont>
        <ParagraphCont>{paragraph}</ParagraphCont>  
        <CustomButtonCont>{title}</CustomButtonCont>
      </ContentCont>
    </FeaturedItemCont>

  );
}
 
export default FeaturedItem;