import { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import LibraryPage from './LibraryPage';
import BookPage from './BookPage';
import AboutUs from './AboutUs';

export default class Main extends Component {

  render() {
    return (
      <>
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
      </>
    )
  }
}