import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import PostModalResults from './PostModalResults';

export default class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  
  //this submit will grab the value of the input feild and use it as the search term for the google book api
  handleSubmit = (e) => {
    e.preventDefault();
    this.searchAPIBook(e.target.title.value)
  }

  //This will make a request from the google book API for a selection of books
  //It will then store that selection in to the books state
  searchAPIBook = async (searchTitle) => {
    let modsearchTitle = searchTitle.replace(/\s+/g, '+');
    let url = `${process.env.REACT_APP_SERVER_URL}/books/search?title=${modsearchTitle}`;
    try {
      const response = await axios.get(url);
      console.log('inside try of addBooks');
      this.setState({ books: response.data });
    } catch (e) {
      console.error(e.response);
    }
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
        {this.state.books ? this.state.books.map(book => <PostModalResults hideModal = {this.props.hideModal} book={book} handlePostBook={this.props.handlePostBook}/>) : false}
      </>
    )
  }
}