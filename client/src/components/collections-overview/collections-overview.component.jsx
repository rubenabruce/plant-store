import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewCont, CollectionOverviewHeader } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => {
  const { plants: {id, ...otherCollectionProps}} = collections;
  return ( 
  <CollectionsOverviewCont>
    <CollectionOverviewHeader>Trending Plants</CollectionOverviewHeader>
    {
      // collections
      // .filter((item, idx) => idx < 2)
      // .map(({ id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} previewGridId={id} {...otherCollectionProps} />
      // ))
    }
  </CollectionsOverviewCont>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);