import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import { Row, Col, Container } from 'react-bootstrap';
class Login extends React.Component {
  render() {
    return (
      <Container>
        <Row style={{ marginTop: 25, marginBottom: 25 }}>
          <Col md={{ span: 4, offset: 4 }}>
            <Card variant='Danger'>
              <Card.Body>
                <Card.Title>Log In</Card.Title>
                <Card.Text>
                  You Are Not Login, So Please Login to see your Content
                </Card.Text>
                <LoginButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
