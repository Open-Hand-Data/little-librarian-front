import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LibrarySearchResults from "./LibrarySearchResults";
import ReviewModal from "./ReviewModal"
import axios from "axios";
import PostModal from "./PostModal";

class LibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showReviewModal: false,
      searchedCharter:'',
      reviewModalBook:{}
    };
  }
  
  //will capture the input from teh form
  //will use input as a search query for book DB
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.CharterNum.value);
    this.getBooks(e.target.CharterNum.value);
    this.setState({searchedCharter:e.target.CharterNum.value})
    console.log('you are trying to submit a library search');
  }
  
  // is passed down to a button on the card inorder to have the book data available.
  // will open the review modal when run
  showReviewModal = (book) =>{
    this.setState({reviewModalBook:book})
    this.setState({showReviewModal:true});
  }
  
  //will close the review modal
  closeReviewModal = () =>{
    this.setState({showReviewModal:false});
  }

  //creates a book from selection to book DB
  handlePostBook = async (bookInfo) => {
    bookInfo.libraryCharter = this.state.searchedCharter;
    var newBookInfo = await axios.post(`${process.env.REACT_APP_SERVER_URL}/books/add/${this.state.searchedCharter}`, bookInfo);
    var bookData = newBookInfo.data;
    console.log(bookData);
    console.log(newBookInfo);
    this.getBooks(this.state.searchedCharter);
  }

  //reads books from the book DB using a passed in charter number
  getBooks = async (charter) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books/catalogue?charter=${charter}`;
    try {
      const response = await axios.get(url);
      console.log('inside try of getBooks',response.data);
      
      this.setState({books: response.data});
    } catch (e) {
      console.error(e.response);
    }
  }

  //updates the review on the book object
  updateBook = async(review) => {
    let book = this.state.reviewModalBook;
    book.review = review;
    let url = `${process.env.REACT_APP_SERVER_URL}/books/review/${book._id}`;
    console.log(url);
    try {
      let updatedBook = await axios.put(url, book)
          this.getBooks(this.state.searchedCharter);
      console.log(updatedBook);
    }
       catch(e) {
      console.log(e);
    }
  }
  
  // deletes a book from book DB
  deleteBook = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/remove/${id}`;
    console.log(url);
    try {
      await axios.delete(url);
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
        {(this.state.books.length > 0) ? this.state.books.map(book => <LibrarySearchResults key={book._id} deleteBook = {this.deleteBook} showReviewModal = {this.showReviewModal} book = {book} /> ): false}
        
        {this.state.reviewModalBook ? <ReviewModal showReviewModal = {this.state.showReviewModal} getBooks ={this.getBooks} updateBook = {this.updateBook} reviewModalBook = {this.state.reviewModalBook} closeReviewModal = {this.closeReviewModal}/> : false} 
       
        {this.state.searchedCharter ? <PostModal libraryCharter = {this.state.searchedCharter} handlePostBook={this.handlePostBook}/>: false}
      </section>
    )
  }
}

export default LibraryPage;