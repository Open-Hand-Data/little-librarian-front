import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import PostModalResults from './PostModalResults';
import Container from 'react-bootstrap/Container'

export default class PostForm extends React.Component {

  
  //this submit will grab the value of the input feild and use it as the search term for the google book api
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchAPIBook(e.target.title.value)
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Enter book title" />
          </Form.Group>
          <Button variant="primary" type="submit">submit</Button>
        </Form>
        <Container>
        {this.props.booksModal ? this.props.booksModal.map(book => <PostModalResults hideModal = {this.props.hideModal} book={book} handlePostBook={this.props.handlePostBook}/>) : false}
        </Container>
      </>
    )
  }
}