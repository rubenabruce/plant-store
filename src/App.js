import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage.component';
import CollectionsPage from './pages/collections/collections.component'

import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/collections' component={CollectionsPage} />
    </div>
  );
}

export default App;
