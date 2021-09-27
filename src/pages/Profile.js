import axios from 'axios';
import React, { Component } from 'react';
import ProfileCards from '../components/ProfileCards';
import UpdateModal from '../components/UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
require('dotenv').config();
const REACT_APP_BACK_END_URL = process.env.REACT_APP_BACK_END_URL;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      selectedBookDataObj: {},
      showUpdateModal: false,
    };
  }

  handelDisplayUpdateModal = (bookObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      selectedBookDataObj: bookObj,
    });
  };

  handelUpdateBook = (event) => {
    event.preventDefault();

    const reqBody = {
      name: event.target.name.value,
      instructions: event.target.instructions.value,
      photo: event.target.photo.value,
    };

    axios
      .put(
        `${REACT_APP_BACK_END_URL}/mybooks/${this.state.selectedBookDataObj._id}`,
        reqBody
      )
      .then((updateResponse) => {
        const newBooksArray = this.state.booksData.map((Book) => {
          if (Book._id === this.state.selectedBookDataObj._id) {
            Book = updateResponse.data;
          }
          return Book;
        });
        this.setState({ booksData: newBooksArray });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDeleteBook = (bookId) => {
    axios
      .delete(`${REACT_APP_BACK_END_URL}/mybooks/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBooksArray = this.state.booksData.filter(
            (Book) => Book._id !== bookId
          );
          this.setState({ booksData: newBooksArray });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    axios
      .get(`${REACT_APP_BACK_END_URL}/mybooks`)
      .then((readResponse) => {
        this.setState({ booksData: readResponse.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const user = this.props.auth0.user;
    return (
      <div>
        <Container>
          <Row style={{ marginTop: 25, marginBottom: 25 }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Card style={{ width: 'auto' }}>
                <Card.Img
                  variant='top'
                  src={user.picture}
                  alt=''
                  style={{ width: 'auto' }}
                />
                <Card.Body>
                  <Card.Title>Name: {user.name}</Card.Title>
                  <Card.Text>Email :{user.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row xs={1} md={2}>
            {this.state.booksData.map((element) => {
              return (
                <ProfileCards
                  element={element}
                  handleDeleteBook={this.handleDeleteBook}
                  handelDisplayUpdateModal={this.handelDisplayUpdateModal}
                />
              );
            })}
          </Row>
        </Container>
        <UpdateModal
          selectedBookDataObj={this.state.selectedBookDataObj}
          showUpdateModal={this.state.showUpdateModal}
          handelUpdateBook={this.handelUpdateBook}
          handelDisplayUpdateModal={this.handelDisplayUpdateModal}
        />
      </div>
    );
  }
}

export default withAuth0(Profile);
