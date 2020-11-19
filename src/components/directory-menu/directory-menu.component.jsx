import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import indoor from '../../assets/potted-plant5.jpg';
import outdoor from '../../assets/potted-plant6.jpg'

import { DirectoryMenuCont, ImagesContainer, ImageSideCont, BackgroundImageCont, LeftCont, RightCont, ContentCont, TitleCont, SubtitleCont } from './directory-menu.styles';

const DirectoryMenu = (props) => {
  return ( 
    <DirectoryMenuCont>

      <LeftCont className='half-container-left'>
        <ContentCont className='content' side='right'>
          <TitleCont>Indoor plants</TitleCont>
          <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
          <CustomButton>SHOP NOW</CustomButton>
        </ContentCont>
      </LeftCont>

      <RightCont className='half-container-right'> 
        <ContentCont className='content' side='left'>
          <TitleCont>Outdoor plants</TitleCont>
          <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
          <CustomButton>SHOP NOW</CustomButton>
        </ContentCont>
      </RightCont>

      <ImagesContainer className='images-container'>
        <ImageSideCont className='image-cont-left'>
          <BackgroundImageCont side='left' className='background-image' src={indoor} />
        </ImageSideCont>
        <ImageSideCont className='image-cont-right'>
          <BackgroundImageCont side='right' className='background-image' src={outdoor} />
        </ImageSideCont>
      </ImagesContainer>

    </DirectoryMenuCont>
  );
}
 
export default DirectoryMenu;