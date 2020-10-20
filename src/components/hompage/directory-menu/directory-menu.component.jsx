import React from 'react';

import CustomButton from '../../custom-button/custom-button.component';

import indoor from '../../../assets/half-potted-plant53.png';
import outdoor from '../../../assets/half-potted-plant62.png'

import { DirectoryMenuCont, BackgroundImageCont, ContentCont, TitleCont, SubtitleCont } from './directory-menu.styles';

const DirectoryMenu = (props) => {
  return ( 
    <DirectoryMenuCont>
        <BackgroundImageCont className='background-image' imageUrl={indoor} />
        <ContentCont className='content' side='right'>
          <TitleCont>Indoor plants</TitleCont>
          <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
          <CustomButton>SHOP NOW</CustomButton>
        </ContentCont>

        <BackgroundImageCont className='background-image' imageUrl={outdoor} />
        <ContentCont className='content' side='left'>
          <TitleCont>Outdoor plants</TitleCont>
          <SubtitleCont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae. Alias odit unde fuga quam veritatis quidem, magni nobis natus fugit rem sequi.</SubtitleCont>
          <CustomButton>SHOP NOW</CustomButton>
        </ContentCont>
    </DirectoryMenuCont>
  );
}
 
export default DirectoryMenu;