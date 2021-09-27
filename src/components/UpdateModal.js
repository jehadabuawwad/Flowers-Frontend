import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showUpdateModal}
          onHide={this.props.handelDisplayUpdateModal}
        >
          <Modal.Body>
            <Form onSubmit={this.props.handelUpdateBook}>
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  placeholder='Enter title for the Book'
                  defaultValue={this.props.selectedBookDataObj.name}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>instructions</Form.Label>
                <Form.Control
                  type='text'
                  name='instructions'
                  placeholder='Enter description for the book'
                  defaultValue={this.props.selectedBookDataObj.instructions}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type='text'
                  name='photo'
                  placeholder='Enter True if the Book Is available and False if it not'
                  defaultValue={this.props.selectedBookDataObj.photo}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='button'
                onClick={this.props.handelDisplayUpdateModal}
              >
                Close
              </Button>
              <Button
                style={{ marginLeft: 20 }}
                variant='primary'
                type='submit'
              >
                Update!
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
