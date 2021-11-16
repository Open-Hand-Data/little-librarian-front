import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LibrarySearchResults from "./LibrarySearchResults";
import ReviewModal from "./ReviewModal"
import axios from "axios";

class LibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{libraryCharter:'59905', title:'Dr.No', author:'Ian Fleming', description:'life finally slows down for james bond', thumbnail: 'https://placekitten.com/200/300'}],
      showReviewModal: false,
      searchedCharter:'',
      reviewModalBook:{}
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
    e.preventDefault();
    console.log(e.target.CharterNum.value);
    // this.getBooks(e.target.CharterNum.value);
    // this.setState({searchedCharter:e.target.CharterNum.value})
    console.log('you are trying to submit a library search');
  }

  showReviewModal = (book) =>{
    this.setState({reviewModalBook:book})
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
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group className="LibrarySearch" controlId="CharterNum">
            <Form.Label>Charter Number</Form.Label>
            <Form.Control type="text" placeholder="Charter Number" />
          </Form.Group>
          <Button type="submit"> Search </Button>
        </Form>
        {(this.state.books.length > 0) ? this.state.books.map(book => <LibrarySearchResults deleteBook = {this.deleteBook} showReviewModal = {this.showReviewModal} book = {book} /> ): false}
        {this.state.reviewModalBook ? <ReviewModal showReviewModal = {this.state.showReviewModal} getBooks ={this.getBooks} reviewModalBook = {this.state.reviewModalBook} closeReviewModal = {this.closeReviewModal}/> : false} 
      </section>
    )
  }
}

export default LibraryPage;