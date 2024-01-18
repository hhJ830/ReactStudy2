// eslint-disable-next-line

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data);
  let [image] = useState(["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg", "https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"])
  let navigate = useNavigate();
  
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


      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>
            <Container>
              <Row style={{ marginTop: '40px' }}>
                {
                  image.map(function (a, i) {
                    return <Item image={image[i]} shoes={shoes[i]}></Item>
                  })
                }
              </Row>
            </Container>

          </div>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />


        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/event" element={
          <>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
          </>
        }>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}


function Item(props) {
  console.log(props.shoes)

  return (
    <Col>

      <img src={props.image} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price + "원"}</p>

    </Col>
  );
}

export default App;
