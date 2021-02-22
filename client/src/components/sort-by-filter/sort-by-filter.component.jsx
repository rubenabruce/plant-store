import React from 'react';

import { SortByFilterCont, ContentCont, OptionCont } from './sort-by-filter.styles';

const SortByFilter = ({ animation }) => ( 
    <SortByFilterCont style={animation} >
      <ContentCont>
        <OptionCont to='/shop?sortby=a-z'>Alphabetical</OptionCont>
        <OptionCont to='/shop?sortby=phigh-plow'>Price: High to Low</OptionCont>
        <OptionCont to='/shop?sortby=plow-phigh'>Price: Low to High</OptionCont>
        <OptionCont to='/shop?sortby=small-big'>Height: Small to Big</OptionCont>
        <OptionCont to='/shop?sortby=big-small'>Height: Big to Small</OptionCont>
      </ContentCont>
    </SortByFilterCont>
);
 
export default SortByFilter;