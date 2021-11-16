import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Header extends Component{

    handleLoginClick = () => {
      console.log('you logged in');
    }

    handleLogOutClick = () => {
      console.log('you logged out');
    }

  
  render(){
    return(
      <header>
        <Navbar>
          <Container>
            <Navbar.Brand> TITLE GOES HERE!!</Navbar.Brand>
              {/* {!this.props.auth0.isAuthenticated ? <Button onClick={this.handleLoginClick}>Log In</Button> : false} */}
              <Button onClick={this.handleLoginClick}>Log In</Button>
              <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
              <NavItem><Link to="/book" className="nav-link">Search By Book</Link></NavItem>
              <NavItem><Link to="/library" className="nav-link">Search By Library</Link></NavItem>
              <Button onClick={this.handleLogOutClick}>Log In</Button>
              {/* {this.props.auth0.isAuthenticated ? <Button onClick={this.handleLogOutClick}>Log In</Button> : false} */}
          </Container>
        </Navbar>
      </header>

    )
  }
}

export default Header;