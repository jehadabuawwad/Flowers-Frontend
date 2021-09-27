import React, { Component } from 'react';
import HomeSlider from '../components/HomeSlider';
import axios from 'axios';
require('dotenv').config();
const REACT_APP_BACK_END_URL = process.env.REACT_APP_BACK_END_URL;
export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
    };
  }
  handelAddBook = (element) => {
    const reqBody = {
      name: element.name,
      instructions: element.instructions,
      photo: element.photo,
    };
    axios
      .post(`${REACT_APP_BACK_END_URL}/mybooks`, reqBody)
      .then((AddBookObject) => {
        this.state.booksData.push(AddBookObject);
        this.setState({ booksData: this.state.booksData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    axios
      .get(`${REACT_APP_BACK_END_URL}/books`)
      .then((booksResponse) => {
        this.setState({ booksData: booksResponse.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        {this.state.booksData.length ? (
          <div>
            <HomeSlider
              handelAddBook={this.handelAddBook}
              booksData={this.state.booksData}
            />
          </div>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>
          </div>
        )}
      </>
    );
  }
}
