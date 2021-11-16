import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}