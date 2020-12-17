import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';

import { CollectionSearchCont } from "./search-items.styles";

const SearchItems = ({ animation }) => {
  return ( 
    <CollectionSearchCont style={animation}>
      <span>Search store</span>
      <input type='text' placeholder='Search here...'></input>
      <CustomButton>Search</CustomButton>
    </CollectionSearchCont>
  );
}
 
export default SearchItems;

