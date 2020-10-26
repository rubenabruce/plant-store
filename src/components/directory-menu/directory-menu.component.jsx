import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import indoor from '../../assets/potted-plant5.jpg';
import outdoor from '../../assets/potted-plant6.jpg'

import { DirectoryMenuCont, BackgroundImageCont, ContentCont, TitleCont, SubtitleCont } from './directory-menu.styles';

const DirectoryMenu = (props) => {
  return ( 
    <DirectoryMenuCont>
        <div className='half-container-left'>
          
          <BackgroundImageCont side='left' className='background-image' src={indoor} />
          <ContentCont className='content' side='right'>
            <TitleCont>Indoor plants</TitleCont>
            <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
            <CustomButton>SHOP NOW</CustomButton>
          </ContentCont>

        </div>

        <div className='half-container-right'>

          <BackgroundImageCont side='right' className='background-image' src={outdoor} />
          <ContentCont className='content' side='left'>
            <TitleCont>Outdoor plants</TitleCont>
            <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
            <CustomButton>SHOP NOW</CustomButton>
          </ContentCont>

        </div>
    </DirectoryMenuCont>
  );
}
 
export default DirectoryMenu;