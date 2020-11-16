import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewCont } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return ( 
  <CollectionsOverviewCont>
    {
      collections.map(({ id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} previewGridId={id} {...otherCollectionProps} />
      ))
    }
  </CollectionsOverviewCont>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);