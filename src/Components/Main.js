import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import LibraryPage from './Components/LibraryPage';
import BookPage from './Components/BookPage';
import AboutUs from './Components/AboutUs';

export default class Main extends Component {

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>

            <Route path='/library'>
              <LibraryPage />
            </Route>

            <Route path='/book'>
              <BookPage />
            </Route>

            <Route path='/about-us'>
              <AboutUs />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}