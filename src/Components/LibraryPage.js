import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LibrarySearchResults from "./LibrarySearchResults";
import ReviewModal from "./ReviewModal"
import axios from "axios";
import PostModal from "./PostModal";
import {withAuth0} from "@auth0/auth0-react";

class LibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showReviewModal: false,
      searchedCharter: '',
      reviewModalBook: {}
    };
  }

  getConfig = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(res);
      console.log(jwt);
      const config = {
        headers: { "Authoriztion": `Bearer ${jwt}`}
      }
      return config;
    }
  }

  //will capture the input from the form
  //will use input as a search query for book DB
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.getBooks(e.target.CharterNum.value);
    this.setState({ searchedCharter: e.target.CharterNum.value })
    console.log('you are trying to submit a library search');
  }

  // is passed down to a button on the card inorder to have the book data available.
  // will open the review modal when run
  showReviewModal = (book) => {
    this.setState({ reviewModalBook: book })
    this.setState({ showReviewModal: true });
  }

  //will close the review modal
  closeReviewModal = () => {
    this.setState({ showReviewModal: false });
  }

  //creates a book from selection to book DB
  handlePostBook = async (bookInfo) => {
    bookInfo.libraryCharter = this.state.searchedCharter;
    let url = `${process.env.REACT_APP_SERVER_URL}/books/add/${this.state.searchedCharter}`
    let config = this.getConfig();
    try{
      var newBookInfo = await axios.post(url, bookInfo, config);
      var bookData = newBookInfo.data;
      console.log(bookData);
      this.getBooks(this.state.searchedCharter);
    } catch (e) {
      console.error(e.response);
    }
  }

  //reads books from the book DB using a passed in charter number
  getBooks = async (charter) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books/catalogue?charter=${charter}`;
    let config = this.getConfig();
    try {
      const response = await axios.get(url,config);
      console.log('inside try of getBooks', response.data);

      this.setState({ books: response.data });
    } catch (e) {
      console.error(e.response);
    }
  }

  //updates the review on the book object
  updateBook = async (review) => {
    let book = this.state.reviewModalBook;
    book.review = review;
    let url = `${process.env.REACT_APP_SERVER_URL}/books/review/${book._id}`;
    let config = this.getConfig();
    console.log(url);
    try {
      let updatedBook = await axios.put(url, book, config)
      this.getBooks(this.state.searchedCharter);
      console.log(updatedBook);
    }
    catch (e) {
      console.log(e);
    }
  }

  // deletes a book from book DB
  deleteBook = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/remove/${id}`;
    let config = this.getConfig();
    console.log(url);
    try {
      await axios.delete(url,config);
      let modifiedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: modifiedBooks });
      this.getBooks(this.state.searchedCharter);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <section>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group className="LibrarySearch" controlId="CharterNum">
            <Form.Label>Charter Number</Form.Label>
            <Form.Control type="text" placeholder="Charter Number" />
          </Form.Group>
          <Button type="submit"> Search </Button>
        </Form>
        {(this.state.books.length > 0) ? this.state.books.map(book => <LibrarySearchResults key={book._id} deleteBook={this.deleteBook} showReviewModal={this.showReviewModal} book={book} />) : false}

        {this.state.reviewModalBook ? <ReviewModal showReviewModal={this.state.showReviewModal} getBooks={this.getBooks} updateBook={this.updateBook} reviewModalBook={this.state.reviewModalBook} closeReviewModal={this.closeReviewModal} /> : false}

        {this.state.searchedCharter ? <PostModal libraryCharter={this.state.searchedCharter} handlePostBook={this.handlePostBook} /> : false}
      </section>
    )
  }
}

export default withAuth0(LibraryPage);