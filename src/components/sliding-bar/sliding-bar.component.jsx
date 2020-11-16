import React, { useState } from 'react';

import ScrollMenu from 'react-horizontal-scrolling-menu';

import Arrow from '../arrow/arrow.component';

import { SlidingBarCont } from "./sliding-bar.styles";

const ArrowLeft = Arrow({ direction: 'left', className: 'arrow-svg arrow-prev' });
const ArrowRight = Arrow({ direction: 'right', className: 'arrow-svg arrow-next' });

const SlidingBar = ({ data }) => {
  const [selected, setSelected] = useState(1);

  const onSelect = key => {
    setSelected({key})
  };

  return (  
    <SlidingBarCont>
      <ScrollMenu 
        data={data}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        translate={20}
      />
    </SlidingBarCont>
  );
}

export default SlidingBar;