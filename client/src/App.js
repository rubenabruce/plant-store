import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import HeadRoom from 'react-headroom';

import { ProvideAuth } from './hooks/use-auth';
import { GlobalStyle } from './global.styles';
import { PrivateRoute, SignInUpRoute } from './components/private-route/private-route';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import AnnouncementBanner from './components/announcement-banner/announcement-banner.component';
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';
import NavDropdown from './components/nav-dropdown/nav-dropdown.component';
import SideNav from './components/side-nav/side-nav.component';
import CartNotification from './components/cart-notification/cart-notification.component';
import Footer from './components/footer/footer.component';
import AccountDropdown from './components/account-dropdown/account-dropdown.component';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const SignIn = lazy(() => import('./components/sign-in/sign-in.component'));
const SignUp = lazy(() => import('./components/sign-up/sign-up.component'));
const CollectionsDirectory = lazy(() => import('./pages/collection-directory/collection-directory.component'));
const CartPage = lazy(() => import('./pages/cart/cart.component'));
const ShopRoutes = lazy(() => import('./pages/shop-routes/shop-routes.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const PaymentSuccess = lazy(() => import('./pages/success/payment-success.component'));
const ContactUsPage = lazy(() => import('./pages/contact-us-page/contact-us-page.component'));
const DeliveryPage = lazy(() => import('./pages/delivery/delivery.component'));
const TnCPage = lazy(() => import('./pages/tnc/tnc.component'));

class App extends Component {

  state = {
    scroll: false
  }

  // if for some reason I need to redo the whole of the shop data on firebase
  // componentDidMount() {
  //   addCollectionAndDocuments("collections", SHOP_DATA.plants)
  // }
  
  render() {
    return (
      <ProvideAuth>
        <div className='app'>
          <GlobalStyle />
          <HeadRoom className='header-container'>
            <AnnouncementBanner />
            <Header />
            <CartNotification />  
            <NavDropdown />
            <AccountDropdown />
          </HeadRoom>

          <SideNav />
          <CartDropdown />

          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/' component={Homepage} />
                <Route path='/collections' component={CollectionsDirectory} />
                <SignInUpRoute path='/signup'><SignUp /></SignInUpRoute>
                <SignInUpRoute path='/signin'><SignIn /></SignInUpRoute>
                <Route path='/shop' component={ShopRoutes} />
                <Route exact path='/cart' component={CartPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route path='/success' component={PaymentSuccess} />
                <Route exact path='/contact' component={ContactUsPage} />
                <Route exact path='/delivery' component={DeliveryPage} />              
                <Route exact path='/tnc' component={TnCPage} />
                <PrivateRoute path='/admin'></PrivateRoute>
              </Suspense>
            </ErrorBoundary>
          </Switch>

          <Footer />
        </div>
      </ProvideAuth>
    );
  }
}

export default App;