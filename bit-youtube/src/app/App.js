import React, { Component } from 'react';
import Header from '../partials/header/Header';
import Footer from '../partials/footer/Footer';
import FeedPage from '../app/feed/FeedPage';

import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/feed" component={FeedPage} />
          <Redirect from='/' to='/feed' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
