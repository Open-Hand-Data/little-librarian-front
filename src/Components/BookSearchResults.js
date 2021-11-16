import { Component } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class LibrarySearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }


  render() {
    return (
      <Container>
        {this.props.bookSearch.map((bookData, idx) => {
          return (
            <Card style={{ width: '18rem' }} key={idx}>
              <Card.Title></Card.Title>
              <Card.Body>
                <Card.Text>Title: {bookData.title}</Card.Text>

              </Card.Body>
              <Button
                variant="danger"
                onClick={() => this.handleDelete(this.props.bookData._id)}
              >
                Take this book?
              </Button>
            </Card>
          )
        })};
      </Container>
    )
  }
}
