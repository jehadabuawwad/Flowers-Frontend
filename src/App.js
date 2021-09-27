import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Footer from './components/Footer';
export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Router>
            <Row>
              <Col>
                <Header />
              </Col>
            </Row>
            <Switch>
              <Route exact path='/'>
                <Row>
                  <Col>
                    <Home />
                  </Col>
                </Row>
              </Route>
              <Route exact path='/profile'>
                <Row>
                  <Col>
                    <Profile />
                  </Col>
                </Row>
              </Route>
            </Switch>
            <Row>
              <Col>
                <Footer />
              </Col>
            </Row>
          </Router>
        </Container>
      </>
    );
  }
}
