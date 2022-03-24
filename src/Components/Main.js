import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import LibraryPage from './LibraryPage';
import BookPage from './SearchByBook/BookPage';
import AboutUs from './AboutUs';
import { withAuth0 } from '@auth0/auth0-react';

class Main extends Component {

  getConfig = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(res);
      console.log(jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}`},
      }
      console.log(config);
      return config;
    }
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>

          <Route path='/library'>
            <LibraryPage getConfig = {this.getConfig}/>
          </Route>

          <Route path='/book'>
            <BookPage getConfig = {this.getConfig} />
          </Route>

          <Route path='/about-us'>
            <AboutUs />
          </Route>
        </Switch>
      </>
    )
  }
}

export default withAuth0(Main)