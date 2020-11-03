import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
// import CollectionsPage from './pages/collections/collections.component'
import CollectionsDirectory from './pages/collection-directory/collection-directory.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {

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
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/collections' component={CollectionsDirectory} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignIn/>)
          } />
          <Route exact path='/signup' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignUp/>)
          } /> />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
