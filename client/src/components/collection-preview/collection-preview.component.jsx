import React from 'react';
import { useSpring } from 'react-spring';
import { Waypoint } from "react-waypoint";

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewCont, PreviewCont } from "./collection-preview.styles";

const CollectionPreview = ({ items, previewGridId }) => {

  const [spring, set] = useSpring(() => ({
    opacity: '0',
    transform: 'translate3d(0, 10%, 0)'
  }))

  const onEnter = () => {
    set({opacity: '1', transform: 'translate3d(0, 0, 0)'})
  }

  const onLeave = () => {
    set({opacity: '0', transform: 'translate3d(0, 10%, 0)'})
  }


  return ( 

    <CollectionPreviewCont>
      <Waypoint onEnter={onEnter} onLeave={onLeave}>
        <PreviewCont>
          <CollectionItem animation={spring} gridid={`0${previewGridId}`} item={items[0]} routing='succulants' />
          <CollectionItem animation={spring} item={items[1]} routing='pots' />
          <CollectionItem animation={spring} item={items[2]} routing='cactus' />
          <CollectionItem animation={spring} item={items[3]} routing='all' />
          <CollectionItem animation={spring} item={items[4]} routing='all' />
        </PreviewCont>
      </Waypoint>
    </CollectionPreviewCont>
  );
}
 
export default CollectionPreview;