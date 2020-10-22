import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { CollectionPreviewCont, TitleCont, PreviewCont } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return ( 
    <CollectionPreviewCont>
      <TitleCont>{title}</TitleCont>
      <PreviewCont>
        {items
          .filter((item, idx) => idx < 3)
          .map(item => (
            <MenuItem key={item.id} item={item}>{item.name}</MenuItem>
          ))
        }
      </PreviewCont>
    </CollectionPreviewCont>
  );
}
 
export default CollectionPreview;