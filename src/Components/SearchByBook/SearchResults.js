import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";



export default class LibrarySearchResults extends Component {


  render() {
    return (
      <>
        <Col>
            <Card style={{ width: '18rem' }} key={this.props.idx}>
              <Card.Title>library Name: {this.props.data.libraryName}</Card.Title>
              <Card.Body>
                <Card.Text>Charter number: {this.props.data.charter}</Card.Text>
                <Card.Img src={this.props.data.thumbnail} alt={this.props.data.title}/>
                <Card.Text>Book Found: {this.props.data.title}</Card.Text>
                <Card.Text>
                  <a target = "_blank" rel="noreferrer" href = {`http://maps.google.com/?q=${this.props.data.geolocation.latitude},${this.props.data.geolocation.longitude}`} >Show Location on Google Maps</a>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </>
    )
  }
}
