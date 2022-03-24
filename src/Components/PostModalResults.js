import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import result from "./results.module.css";

export default class PostModalResults extends Component{

  addBookToLibrary = () => {
    this.props.handlePostBook(this.props.book);
    console.log('gonna add a book');
    this.props.hideModal();
  }

  render(){
    return (
      <Card className={result.modalCard}>
        {this.props.book.thumbnail ? <Card.Img className={result.cardImg} src={this.props.book.thumbnail} /> : false }
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Subtitle>{this.props.book.author}</Card.Subtitle>
        <Card.Text className={result.cardText}>{this.props.book.description}</Card.Text>
        <Button onClick = {this.addBookToLibrary}>Add Book to Library</Button>
      </Card>

    )
  }
}