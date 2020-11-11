import React from 'react';

import { CheckboxCont } from './checkbox-input.styles';

const CheckboxInput = ({handleChange, label, name, ...otherProps}) => {
  return (
    <CheckboxCont>
      <label htmlFor={name}>{label}</label>
      <input type='checkbox' onChange={handleChange} name={name} {...otherProps} />
    </CheckboxCont>
  );
}
 
export default CheckboxInput;