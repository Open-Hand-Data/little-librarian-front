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

  // the passed down funciton to delete by id
  deleteBook = async () => {
    this.props.deleteBook(this.props.book._id);
  }

  // the passed down funtion to bring up the review modal on the parent component
  leaveReviewBook = () => {
    console.log('this will pop up the review modal');
    this.props.showReviewModal(this.props.book);
  }




  render(){
    return (
      <Card key={this.props.book._id} style={{width: '18rem'}}>
        {this.props.book.thumbnail ? <Card.Img variant="top" src={this.props.book.thumbnail} /> : false }
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>{this.props.book.authors}</Card.Text>
        <Card.Text>{this.props.book.description}</Card.Text>
        <Button onClick = {this.deleteBook}>Borrow Book</Button>
        <Button onClick = {this.leaveReviewBook}>Review Book</Button>
      </Card>

    )
  }
}