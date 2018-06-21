import React, { Component } from 'react';
import Header from '../partials/header/Header';
import Footer from '../partials/footer/Footer';
import FeedPage from '../app/feed/FeedPage';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeedPage />
        <Footer />
      </div>
    );
  }
}

export default App;
