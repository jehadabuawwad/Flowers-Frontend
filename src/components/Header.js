import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar style={{marginBottom:50}} bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>Booker</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='profile'>Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
