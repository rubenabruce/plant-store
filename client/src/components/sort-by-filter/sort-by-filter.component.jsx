import React from 'react';

import { SortByFilterCont, ContentCont, OptionCont } from './sort-by-filter.styles';

const SortByFilter = ({ animation }) => ( 
    <SortByFilterCont style={animation} >
      <ContentCont>
        <OptionCont to='/shop?sortby=new-old'>Newest to Oldest</OptionCont>
        <OptionCont to='/shop?sortby=phigh-plow'>Price: High to Low</OptionCont>
        <OptionCont to='/shop?sortby=plow-phigh'>Price: Low to High</OptionCont>
        <OptionCont to='/shop?sortby=small-big'>Size: Small to Big</OptionCont>
      </ContentCont>
    </SortByFilterCont>
);

 
export default SortByFilter;