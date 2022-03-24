import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import result from "./results.module.css";

export default class LibrarySearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  // the passed down funciton to delete by id
  deleteBook = async () => {
    this.props.deleteBook(this.props.book._id);
  }

  // the passed down funtion to bring up the review modal on the parent component
  leaveReviewBook = () => {
    console.log('this will pop up the review modal');
    this.props.showReviewModal(this.props.book);
  }




  render() {
    return (
      <Col>
        <Card key={this.props.book._id} className={result.card}>
          {this.props.book.thumbnail ? <Card.Img className ={result.cardImg} src={this.props.book.thumbnail} /> : false}
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Subtitle>{this.props.book.authors}</Card.Subtitle>
          <Card.Text className={result.cardText}><strong>Description: </strong>{this.props.book.description}</Card.Text>
          <Card.Footer>
            <Row >
              <Col>
              <Button onClick={this.deleteBook}>Borrow</Button>
              </Col>
              <Col>
              <Button onClick={this.leaveReviewBook}>Review</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
      

    )
  }
}