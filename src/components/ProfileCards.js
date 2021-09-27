import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { withAuth0 } from '@auth0/auth0-react';
class ProfileCards extends Component {
  render() {
    return (
      <>
        <Container>
          <Col md={{span:12 , offset:0}}>
            <Card style={{marginTop:25}}>
              <Card.Img style={{width:635,height:500}} variant='top' src={this.props.element.photo} />
              <Card.Body>
                <Card.Title>{this.props.element.name}</Card.Title>
                <Card.Text>{this.props.element.instructions}</Card.Text>
                <Button
                  onClick={() => this.props.handleDeleteBook(this.props.element._id)}
                  variant='primary'
                >
                  Delete
                </Button>
                <Button
                  onClick={() =>
                    this.props.handelDisplayUpdateModal(this.props.element)
                  }
                  variant='primary'
                  style={{ marginLeft: 25 }}
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}
export default withAuth0(ProfileCards);