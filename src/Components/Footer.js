import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="Footer">
        <Navbar.Brand>Little Librarian</Navbar.Brand>
        <Navbar.Brand>© by OpenHand Data</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;