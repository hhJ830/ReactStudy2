// eslint-disable-next-line

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Row>
            <Col>
              <Nav>
                <Navbar.Brand href="#home" className='font' style={{ fontSize: 28 }}>NIKE</Navbar.Brand>
              </Nav>
            </Col>
            
            <Col className="d-flex justify-content-end">
              <Nav>
                <Nav.Link href="#home" className='mr-2' style={{ marginTop: '5px' }}>Home</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <div>
            <Nav>
              <Nav.Link href="#cart" className='ml-2'>Cart</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row style={{ marginTop: '40px' }}>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].price }</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].price }</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].price }</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
