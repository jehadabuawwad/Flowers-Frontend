import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Login from './components/Login';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      user: false,
    };
  }
  loginHandler = (user) => {
    this.setState({
      user: !this.state.user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: !this.state.user,
    });
  };

  formSubmit = () => {
    this.setState({
      submitted: !this.state.submitted,
    });
  };
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
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
              <Col style={{ marginTop: 10 }} md={{ span: 12, offset: 0 }}>
                {isAuth ? <Home /> : <Login />}
                </Col>
            </Row>
              </Route>
              <Route exact path='/profile'>
                {isAuth && <Profile />}
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
export default withAuth0(App);
