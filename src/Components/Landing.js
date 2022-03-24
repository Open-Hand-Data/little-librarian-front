import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container'
import landing from '../css/landing.module.css';

class Landing extends Component {
  render() {
    return (
      <Container className={landing.pageCont}>
        {this.props.auth0.isAuthenticated ? <h1>{this.props.auth0.user.name}, welcome to Little Librarian!</h1> : <h1>Welcome to Little Libarian! Please log in to begin.</h1>}
        <img src="/imgs/logopic.jpg" alt="free little library" />
      </Container>
    )
  }
}


export default withAuth0(Landing);