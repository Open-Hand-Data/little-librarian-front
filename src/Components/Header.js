import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react'

import '../css/Header.css';

class Header extends Component {

  handleLoginClick = () => {
    console.log('you logged in');
  }

  handleLogOutClick = () => {
    console.log('you logged out');
  }


  render() {
    return (
      <header>
        <Navbar expand="true">
          <Container id="titleContainer">
            <Navbar.Brand id="title"> Little Librarian</Navbar.Brand>
              {!this.props.auth0.isAuthenticated ? <LoginButton /> : <LogoutButton />}
              <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
              {this.props.auth0.isAuthenticated ?
                <>
                  <NavItem><Link to="/book" className="nav-link">Search By Book</Link></NavItem>
                  <NavItem><Link to="/library" className="nav-link">Search By Library</Link></NavItem>
                </>
                : false}
              <NavItem><Link to="/about-us" className="nav-link">About Us</Link></NavItem>
          </Container>
        </Navbar>
      </header>

    )
  }
}

export default withAuth0(Header);