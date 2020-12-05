import React from 'react';

import { FeaturedSectionCont } from './featured-section.styles'

import FeaturedItem from '../featured-item/featured-item.component';

const FeaturedSection = () => {
  const featuredArr = [
    {
      id: 1,
      title: 'New Plants',
      paragraph: 'Take a peek at our newest selection of succulants, cactus and more!',
      buttonUrl: '/shop',
      imageUrl: 'https://picsum.photos/500',
      shown: true
    },
    {
      id: 2,
      title: 'Big Plants',
      paragraph: 'Want to bring a bit of the forrest into your home? Check out these big botanical bois!',
      buttonUrl: '/shop',
      imageUrl: 'https://picsum.photos/500',
      shown: false
    },
    {
      id: 3,
      title: 'Little Plants',
      paragraph: 'Does your desk need a little lift? Have a look at these little fellas who make a big difference!',
      buttonUrl: '/shop',
      imageUrl: 'https://picsum.photos/500',
      shown: false
    }
  ]

  return ( 
    <FeaturedSectionCont>
      {
        featuredArr.map(item => (
          <div key={ item.id }>
            <FeaturedItem  key={item.id} item={item} />
          </div>
        ))
      }
    </FeaturedSectionCont>
  );

}
 
export default FeaturedSection;