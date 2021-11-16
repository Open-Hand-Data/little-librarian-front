import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    )
  }
}