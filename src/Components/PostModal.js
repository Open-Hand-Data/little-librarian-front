import React from 'react';
import PostForm from './PostForm';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export default class PostModal extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showmodal:false
    }
  }
  showModal = () => {
    this.setState({showmodalstate:true});
  }

  closeModal = () => {
    this.setState({showmodalstate:false});
    this.props.clearBooksModal();
  }


  render() {
    return (
      <>
        <Button onClick={this.showModal}>Add a Book to this Library</Button>
        <Modal
          show={this.state.showmodalstate}
          onHide={this.closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a book to the library.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <PostForm booksModal = {this.props.booksModal} searchAPIBook ={this.props.searchAPIBook} libraryCharter={this.props.libraryCharter} handlePostBook={this.props.handlePostBook} hideModal={this.closeModal} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
