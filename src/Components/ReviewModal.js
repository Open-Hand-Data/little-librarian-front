import { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"


class ReviewModal extends Component {

  handleClose = () => {
    this.props.closeReviewModal();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let review = e.target.reviewText.value;
    this.props.updateBook(review);
    this.props.closeReviewModal();
  }

  dataButton = () => {
    console.log(this.props.reviewModalBook);
  }


  render(){
    return (
      <Modal
        show={this.props.showReviewModal}
        onHide={this.handleClose}
        centered
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Review for {this.props.reviewModalBook.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.reviewModalBook.review.length > 0 ? this.props.reviewModalBook.review.map(review => <p>{review}</p> ): false }
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="reviewModal" controlId="reviewText">
              <Form.Label>Leave A Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit">Submit Review</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ReviewModal;