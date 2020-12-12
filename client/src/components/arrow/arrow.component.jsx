import React from 'react';

import { ArrowSvgCont } from "./arrow.styles";

const Arrow = ({ direction, className }) => {
  return (
    <div
      className={className}
    ><ArrowSvgCont direction={direction} /></div>
  );
};

export default Arrow