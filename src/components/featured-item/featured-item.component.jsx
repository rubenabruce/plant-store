import React from 'react';


import { FeaturedItemCont, ContentCont, ImageCont,CustomButtonCont, TitleCont, ParagraphCont } from './featured-item.styles';

const FeaturedItem = ({ item }) => {
  const { id, title, paragraph } = item
  return ( 
    <FeaturedItemCont id={id} >
      <ImageCont item={item} otherStyles={`height: 100%; width: 50%;`} alt='Featured-item'/>
      <ContentCont id={id}>
        <TitleCont>{title}</TitleCont>
        <ParagraphCont>{paragraph}</ParagraphCont>  
        <CustomButtonCont>{title}</CustomButtonCont>
      </ContentCont>
    </FeaturedItemCont>

  );
}
 
export default FeaturedItem;