import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeadRoom from 'react-headroom';

import Header from './components/header/header.component';
import AnnouncementBanner from './components/announcement-banner/announcement-banner.component';
import Homepage from './pages/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import CollectionsDirectory from './pages/collection-directory/collection-directory.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import ShopItemPage from './pages/shop-item-page/shop-item-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {

  state = {
    scroll: false
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='app'>
        <HeadRoom className='header-container'>
          <AnnouncementBanner />
          <Header />
        </HeadRoom>

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/collections' component={CollectionsDirectory} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignIn/>)
          } />
          <Route exact path='/signup' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignUp/>)
          } /> 
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/:itemId' component={ShopItemPage} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
