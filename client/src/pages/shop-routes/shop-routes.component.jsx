import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import ShopPage from '../shop/shop.component';
import ShopItemPage from '../shop-item-page/shop-item-page.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ShopPageWithSpinner = WithSpinner(ShopPage);
const ShopItemPageWithSpinner = WithSpinner(ShopItemPage);

class ShopRoutes extends Component {
  state = { 
    loading: true
  }
   
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() { 
    const { loading } = this.state;
    const { match } = this.props;
    
    return ( 
      <div>
        <Route exact path={`${match.path}`} render={(props) => <ShopPageWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:itemId`} render={(props) => <ShopItemPageWithSpinner isLoading={loading} {...props} />}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopRoutes);