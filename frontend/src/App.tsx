import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestingState from './Components/testingState';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import MainPage from './Components/mainpage';
import { Col, Container, Row, Button } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );

}




export default App;
