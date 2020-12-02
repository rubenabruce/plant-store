import React from 'react';

import { CustomButtonContainer } from "./custom-button.styles"; 

const CustomButton = ({ children, animation, ...props}) => (
  <CustomButtonContainer style={animation} {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;