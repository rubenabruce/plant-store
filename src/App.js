import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
// import CollectionsPage from './pages/collections/collections.component'
import CollectionsDirectory from './pages/collection-directory/collection-directory.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/collections' component={CollectionsDirectory} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    );
  }

}

export default App;
