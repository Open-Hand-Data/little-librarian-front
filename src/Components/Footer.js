import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="Footer">
        <Navbar.Brand id="foot">Little Librarian © by OpenHand Data </Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;