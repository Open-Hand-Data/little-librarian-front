import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class PostModalResults extends Component{

  addBookToLibrary = () => {
    this.props.handlePostBook(this.props.book);
    console.log('gonna add a book');
    this.props.hideModal();
  }

  render(){
    return (
      <Card style={{width: '18rem'}}>
        {this.props.book.thumbnail ? <Card.Img variant="top" src={this.props.book.thumbnail} /> : false }
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>{this.props.book.author}</Card.Text>
        <Card.Text>{this.props.book.description}</Card.Text>
        <Button onClick = {this.addBookToLibrary}>Add Book to Library</Button>
      </Card>

    )
  }
}