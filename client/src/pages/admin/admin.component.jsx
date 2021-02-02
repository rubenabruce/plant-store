import React, { Component }from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { setOriginalData, setUpdateData } from '../../redux/admin/admin.actions';

import AdminStock from '../../components/admin-stock/admin-stock.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import AdminHeader from '../../components/admin-header/admin-header.component';
import AdminNewItem from '../../components/admin-new-item/admin-new-item.component';

import { AdminPageCont } from './admin.styles'

const AdminStockWithSpinner = WithSpinner(AdminStock);

class Admin extends Component {
  state = { 
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {setOriginalData, setUpdateData} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      setOriginalData(collectionsMap);
      setUpdateData(collectionsMap)
      this.setState({ loading: false });
    });
  }
  
  render() { 
    const { loading } = this.state;

    return ( 
      <AdminPageCont>
        <AdminHeader />
        <Route exact path={'/admin'} render={(props) => <AdminStockWithSpinner isLoading={loading} {...props}  />} />
        <Route exact path={`/admin/new`} component={AdminNewItem}/>
      </AdminPageCont>
    );
  }
}
 
const mapDispatchToProps = dispatch => ({
  setOriginalData: collectionsMap => dispatch(setOriginalData(collectionsMap)),
  setUpdateData: collectionsMap => dispatch(setUpdateData(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Admin);
