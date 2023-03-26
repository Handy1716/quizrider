import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import { Container, Button } from 'react-bootstrap';
import Main from './Components/main';


function App() {
  
  
  const [state, setState] = useState<{page: string, loggedIn: boolean}>({
    page: "main",
    loggedIn: false
  });
  function loginClick() {
    setState({
      page: "login",
      loggedIn: false,
    });
  }
  function registerClick() {
    setState({
      page: "register",
      loggedIn: false,
    });
  }
  return (
    <>
      <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick}/>
      <Container>
      <Main />
      {state.loggedIn===false && state.page==="login" &&(<Login />)}
      {state.loggedIn===false && state.page==="register" &&(<Register />)}
      {state.page}
      </Container>
    </>
  );

}




export default App;
