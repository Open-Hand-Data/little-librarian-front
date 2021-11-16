import React from 'react';
import PostForm from './PostForm';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export default class PostModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new book?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <PostForm libraryCharter={this.props.libraryCharter} handlePostBook={this.props.handlePostBook} hideModal={this.props.hideModal} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
