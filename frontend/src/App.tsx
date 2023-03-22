import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestingState from './Components/testingState';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import { Col, Container, Row, Button } from 'react-bootstrap';

function App() {

// this.state = {
//   logged: false,
//   page: "main"
// }
  // state.logged = true/false - be van-e lepve
  // state.page = "login","main","signup"

  return (
    <Header page={this.state.page}/>
    <Container>
      <Register />
    </Container>

  );

}




export default App;
