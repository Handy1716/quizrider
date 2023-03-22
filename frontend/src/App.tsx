import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestingState from './Components/testingState';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import { Col, Container, Row, Button } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2 <Button>xxxx</Button></Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>

  );

}




export default App;
