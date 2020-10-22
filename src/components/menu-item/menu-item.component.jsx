import React from 'react';

import { MenuItemCont, ImageContainerCont, ImageCont, ItemFooterCont } from "./menu-item.styles";

const MenuItem = ({item: {id, imageUrl, name, price}}) => {
  return (
    <MenuItemCont>
      <ImageContainerCont className='background-image-cont'><ImageCont className='background-image' imageUrl={imageUrl} /></ImageContainerCont>
      <ItemFooterCont>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
      </ItemFooterCont>
    </MenuItemCont>
  ); 
}
 
export default MenuItem;
