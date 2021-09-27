import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
export default class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.booksData.length ? (
          <Row>
            <Col
              style={{ marginTop: 15, marginBottom: 15 }}
              md={{ span: 0, offset: 0 }}
            >
              <Carousel itemsToShow={this.props.booksData.length}>
                {this.props.booksData.map((element) => {
                  return (
                    <Carousel.Item interval={3000}>
                      <Image
                        rounded
                        src={element.photo}
                        style={{ height: 800 }}
                        className='d-block w-100'
                      />
                      <Carousel.Caption
                        style={{ fontSize: 35, marginBottom: 50 }}
                      >
                        <h3>{element.name}</h3>
                        <p>{element.instructions}</p>

                        <Row>
                          <Col style={{ margin: 'auto' }}>
                            <Button
                              variant='success'
                              onClick={() => this.props.handelAddBook(element)}
                            >
                              Add Book
                            </Button>
                          </Col>
                        </Row>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>

            <Button
              variant='success'
              onClick={this.handelDisplayAddModal}
              style={{ marginBottom: 25 }}
            >
              Add Book
            </Button>
          </div>
        )}
      </>
    );
  }
}
