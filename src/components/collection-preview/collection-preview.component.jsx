import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewCont, TitleCont, PreviewCont } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return ( 
    <CollectionPreviewCont>
      <TitleCont>{title}</TitleCont>
      <PreviewCont>

        <CollectionItem gridId='0' item={items[0]}></CollectionItem>
        <CollectionItem gridId='1' item={items[1]}></CollectionItem>
        <CollectionItem gridId='2' item={items[2]}></CollectionItem>
        <CollectionItem gridId='3' item={items[3]}></CollectionItem>

        {
          

          // items
          // .filter((item, idx) => idx < 4)
          // .map(item => (
          //   <CollectionItem key={item.id} item={item}></CollectionItem>
          // ))
        }
      </PreviewCont>
    </CollectionPreviewCont>
  );
}
 
export default CollectionPreview;