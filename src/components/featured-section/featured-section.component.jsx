import React, {Component} from 'react';

import { FeaturedSectionCont } from './featured-section.styles'

import FeaturedItem from '../featured-item/featured-item.component';

class FeaturedSection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      featured: [
        {
          id: 1,
          title: 'New Plants',
          paragraph: 'Take a peek at our newest selection of succulants, cactus and more!',
          buttonUrl: '/shop',
          imageUrl: 'https://picsum.photos/500'
        },
        {
          id: 2,
          title: 'Big Plants',
          paragraph: 'Want to bring a bit of the forrest into your home? Check out these big botanical bois!',
          buttonUrl: '/shop',
          imageUrl: 'https://picsum.photos/500'
        },
        {
          id: 3,
          title: 'Little Plants',
          paragraph: 'Does your desk need a little lift? Have a look at these little fellas who make a big difference!',
          buttonUrl: '/shop',
          imageUrl: 'https://picsum.photos/500'
        }
      ]
    }
  }
  render() { 
    return ( 
      <FeaturedSectionCont>
        {
          this.state.featured.map((item) => (
            <FeaturedItem key={item.id} item={item}></FeaturedItem>
          ))
        }
      </FeaturedSectionCont>
    );
  }
}
 
export default FeaturedSection;