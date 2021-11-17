import { Component } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";


export default class LibrarySearchResults extends Component {

  render() {
    return (
      <Container>
        <h2>We found your book in these libraries!</h2>
        {this.props.libraryArr.map((data, idx) => {
          return (
            <Card style={{ width: '18rem' }} key={idx}>
              <Card.Title>library Name: {data.libraryName}</Card.Title>
              <Card.Body>
                <Card.Text>Charter number: {data.charter}</Card.Text>
                <Card.Text>Latitude: {data.geolocation.latitude}</Card.Text>
                <Card.Text>Longitude: {data.geolocation.longitude}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </Container>
    )
  }
}
