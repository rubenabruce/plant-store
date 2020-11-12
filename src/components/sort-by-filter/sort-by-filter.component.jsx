import React from 'react';

import { SortByFilterCont, ContentCont, OptionCont } from './sort-by-filter.styles';

const SortByFilter = () => {
  return ( 
    <SortByFilterCont>
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