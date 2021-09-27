import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <>
        <Navbar style={{ marginBottom: 50 }} bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>Booker</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              {isAuth && (
                <NavItem>
                  <Link className='nav-link' to='/profile'>
                    Profile
                  </Link>
                </NavItem>
              )}
            </Nav>
  
            <Col
              md={{ span: 1, offset: 6 }}
              style={{ marginRight: 0 }}
              xs={{ span: 0, offset: 0 }}
            >
              {isAuth ? <LogoutButton /> : <LoginButton />}
            </Col>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
