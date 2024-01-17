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
  let [image] = useState(["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg", "https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"])
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
          {
            image.map(function (a, i){
              return <Item image = {image[i]} shoes = { shoes[i] }></Item>
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Item(props){
  console.log(props.shoes)

  return(
    <Col>
      <img src={ props.image } width="80%"></img>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price +"원"}</p>
    </Col>
  );

}

export default App;
