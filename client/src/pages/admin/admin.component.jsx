import React, { Component }from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { setOriginalData, setUpdateData } from '../../redux/admin/admin.actions';

import AdminStock from '../../components/admin-stock/admin-stock.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import AdminHeader from '../../components/admin-header/admin-header.component';
import AdminNewItem from '../../components/admin-new-item/admin-new-item.component';

import { AdminPageCont } from './admin.styles'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { useAuth } from '../../hooks/use-auth';

const AdminStockWithSpinner = WithSpinner(AdminStock);

class Admin extends Component {
  state = { 
    loading: true
  }

  admin= {
    createdAt: {seconds: 1604151096, nanoseconds: 223000000},
    displayName: "Ruben Aaronovitch-Bruce",
    email: "rabruben1@gmail.com",
    id: "NticDxKJyHO2sxJjN0dwJMUg0aT2"
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
    console.log(this.props.currentUser)

    return ( 
      <AdminPageCont>
        <AdminHeader />
        <Route exact path={'/admin'} render={(props) => <AdminStockWithSpinner isLoading={loading} {...props}  />} />
        <Route exact path={`/admin/new`} component={AdminNewItem}/>
      </AdminPageCont>
    );

  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
 
const mapDispatchToProps = dispatch => ({
  setOriginalData: collectionsMap => dispatch(setOriginalData(collectionsMap)),
  setUpdateData: collectionsMap => dispatch(setUpdateData(collectionsMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
