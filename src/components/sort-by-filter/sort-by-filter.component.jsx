import React from 'react';
import { animated } from 'react-spring';

import { SortByFilterCont, ContentCont, OptionCont } from './sort-by-filter.styles';

const SortByFilter = ({ animation }) => {
  return ( 
    <SortByFilterCont style={animation} >
      <ContentCont>
        <OptionCont>Newest to Oldest</OptionCont>
        <OptionCont>Price: High to Low</OptionCont>
        <OptionCont>Price: Low to High</OptionCont>
        <OptionCont>Recommended</OptionCont>
      </ContentCont>
    </SortByFilterCont>
  );
}
 
export default SortByFilter;