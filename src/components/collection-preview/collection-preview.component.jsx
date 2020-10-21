import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

const CollectionPreview = ({ title, items }) => {
  console.log(items)
  return ( 
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <MenuItem key={item.id} item={item}>{item.name}</MenuItem>
          ))
        }
      </div>
    </div>
  );
}
 
export default CollectionPreview;