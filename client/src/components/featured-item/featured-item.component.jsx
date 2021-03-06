import React from 'react';
import { useHistory } from 'react-router-dom';
import { config, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import { FeaturedItemCont, ContentCont, ImageCont,CustomButtonCont, TitleCont, ParagraphCont } from './featured-item.styles';

const FeaturedItem = ({ item }) => {
  const history = useHistory();
  const { id, title, paragraph } = item;

  const checkEven = (id) => {
    if (id % 2) {
      return true;
    } else {
      return false;
    }
  }

  const [props, set] = useSpring(() => ({
    opacity: 0.1,
    transform: checkEven(id) ? 'translate3d(15%, 0, 0)' : 'translate3d(-15%, 0, 0)',
    config: config.molasses
  }));

  const onEnter = () => {
    set({ opacity: 1, transform: "translate3d(0,0,0)" });
  };

  const onLeave = () => {
    set({ opacity: 0, transform: checkEven(id) ? "translate3d(15%,0,0)" : "translate3d(-15%, 0, 0)"});
  };

  return (

    <Waypoint scrollableAncestor={window} style={{height: '400px'}} onEnter={onEnter} onLeave={onLeave}  >
      <FeaturedItemCont style={props} id={id} >
        <ImageCont item={item} alt='Featured-item'/>
        <ContentCont id={id}>
          <TitleCont>{title}</TitleCont>
          <ParagraphCont>{paragraph}</ParagraphCont>  
          <CustomButtonCont onClick={() => history.push('/shop')}>{title}</CustomButtonCont>
        </ContentCont>
      </FeaturedItemCont>
    </Waypoint>
      
  );
}
 
export default FeaturedItem;