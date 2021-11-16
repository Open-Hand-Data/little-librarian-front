import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LibrarySearchResults from "./LibrarySearchResults";
import ReviewModal from "./ReviewModal"
import axios from "axios";

class LibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showReviewModal: false,
    };
  }

  getBooks = async (charter) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books/catalog?charter=${charter}`;
    try {
      const response = await axios.get(url);
      console.log('inside try of getBooks');
      this.setState({books: response.data});
    } catch (e) {
      console.error(e.response);
    }
  }

  handleOnSubmit = (e) => {
    e.prevenDefault();
    this.getBooks(e.target.value);
    console.log('you are trying to submit a library search');
  }

  showReviewModal = () =>{
    this.setState({showReviewModal:true});
  }

  closeReviewModal = () =>{
    this.setState({showReviewModal:false});
  }

  deleteBook = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/remove/${id}`;
    console.log(url);
    try {
      await axios.delete(url);
      let modifiedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: modifiedBooks });
      this.getBooks();
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <section>
        <Form>
          <Form.Group className="LibrarySearch" controlId="CharterNum">
            <Form.Label>Charter Number</Form.Label>
            <Form.Control type="number" placeholder="Charter Number" />
          </Form.Group>
          <Button onSubmit={this.handleOnSubmit}> Search </Button>
        </Form>
        {(this.state.books.length > 0) ? this.state.books.map(book => <LibrarySearchResults deleteBook = {this.deleteBook} showReviewModal = {this.showReviewModal} book = {book} /> ): false}
        <ReviewModal closeReviewModal = {this.closeReviewModal} />
      </section>
    )
  }
}

export default LibraryPage;