import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class LibrarySearchResults extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm:''
    }
  }

  deleteBook = async () => {
    this.props.deleteBook(this.props.book._id);
  }

  leaveReviewBook = () => {
    console.log('this will pop up the review modal');
    this.props.showReviewModal();
  }



  render(){
    return (
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={this.props.book.thumbnail} />
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>{this.props.book.author}</Card.Text>
        <Card.Text>{this.props.book.description}</Card.Text>
        <Button onClick = {this.deleteBook}>Borrow Book</Button>
        <Button onClick = {this.leaveReviewBook}>Borrow Book</Button>
      </Card>

    )
  }
}