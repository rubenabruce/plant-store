import React from 'react';

import { MenuItemCont, ImageCont, ItemFooterCont } from "./menu-item.styles";

const MenuItem = (item) => {
  const { id, name, price, imageUrl } = item;
  return (
    <MenuItemCont>
      <ImageCont imageUrl={imageUrl} />
      <ItemFooterCont>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </ItemFooterCont>
    </MenuItemCont>
  ); 
}
 
export default MenuItem;
