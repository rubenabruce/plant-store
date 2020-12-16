import React from 'react';

import { GroupCont, FormInputCont, FormInputLabelCont } from "./form-input.styles";

const FormInput = ({handleChange, label, widthchange, ...otherProps}) => (
  <GroupCont style={{width: widthchange}}>
    <FormInputCont onChange={handleChange} {...otherProps}></FormInputCont>
    {
      label ? (
        <FormInputLabelCont className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </FormInputLabelCont>
      ) : null
    }
  </GroupCont>
);

export default FormInput;