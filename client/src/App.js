import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HeadRoom from 'react-headroom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import AnnouncementBanner from './components/announcement-banner/announcement-banner.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';
import NavDropdown from './components/nav-dropdown/nav-dropdown.component';
import SideNav from './components/side-nav/side-nav.component';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const SignIn = lazy(() => import('./components/sign-in/sign-in.component'));
const SignUp = lazy(() => import('./components/sign-up/sign-up.component'));
const CollectionsDirectory = lazy(() => import('./pages/collection-directory/collection-directory.component'));
const CartPage = lazy(() => import('./pages/cart/cart.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const ShopItemPage = lazy(() => import('./pages/shop-item-page/shop-item-page.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const PaymentSuccess = lazy(() => import('./pages/success/payment-success.component'));
const ContactUsPage = lazy(() => import('./pages/contact-us-page/contact-us-page.component'));
const DeliveryPage = lazy(() => import('./pages/delivery/delivery.component'));

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
        <GlobalStyle />
        <HeadRoom className='header-container'>
          <AnnouncementBanner />
          <Header />
        </HeadRoom>

        <NavDropdown />
        <SideNav />
        <CartDropdown />


        <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route path='/shop/:itemId' component={ShopItemPage} />
              <Route path='/success' component={PaymentSuccess} />
              <Route exact path='/contact' component={ContactUsPage} />
              <Route exact path='/delivery' component={DeliveryPage} />              
            </Suspense>
          </ErrorBoundary>
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