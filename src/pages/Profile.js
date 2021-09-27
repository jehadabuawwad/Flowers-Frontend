import axios from 'axios';
import React, { Component } from 'react';
import ProfileCards from '../components/ProfileCards';
import UpdateModal from '../components/UpdateModal';
import Row from 'react-bootstrap/Row';
require('dotenv').config();
const REACT_APP_BACK_END_URL = process.env.REACT_APP_BACK_END_URL;
export default class Profile extends Component {
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
    return (
      <div>
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
