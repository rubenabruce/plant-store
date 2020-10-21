import React from 'react';

const CollectionPreview = ({ title, items }) => {
  return ( 
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {items.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
 
export default CollectionPreview;