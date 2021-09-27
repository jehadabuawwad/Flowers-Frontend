import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <>
        <Container style={{marginTop:50}}>
          <Navbar expand='lg' bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand style={{marginLeft:'auto',marginRight:'auto'}} href='#'>Made by Jehad Abu Awwad 2021 ©️ </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}
