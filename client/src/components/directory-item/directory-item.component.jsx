import React from 'react';
import { withRouter } from 'react-router-dom';

import { CollectionCont, BackgroundImageCont, ContentCont, TitleCont, SubtitleCont } from "./directory-item.styles";

const DirectoryItem = ({title, backgroundImage, number, history, match, linkUrl }) => {
  return ( 
    <CollectionCont className={number}>
      <BackgroundImageCont className='background-image' imageUrl={backgroundImage} onClick={() => {history.push(`${match.url}${linkUrl}`)}} />
      <ContentCont className='content'>
        <TitleCont>{title.toUpperCase()}</TitleCont>
        <SubtitleCont>SHOP NOW</SubtitleCont>
      </ContentCont>
    </CollectionCont>
  );
}
 
export default withRouter(DirectoryItem);