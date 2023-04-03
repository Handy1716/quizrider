import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import { Container, Button } from 'react-bootstrap';
import Main from './Components/main';
import CreateQuiz from './Components/createQuiz';
import Tabsbar from './Components/tabsbar';


function App() {
  
  
  const [state, setState] = useState<{page: string, loggedIn: boolean}>({
    page: "main",
    loggedIn: false
  });
  function loginClick() {
    setState({
      page: "login",
      loggedIn: state.loggedIn,
    });
  }
  function registerClick() {
    setState({
      page: "register",
      loggedIn: state.loggedIn,
    });
  }
  function mainClick() {
    setState({
      page: "main",
      loggedIn: state.loggedIn,
    })
  }
  function createQuizClick(){
    setState({
      page: "createQuiz",
      loggedIn: true, //TODO: ez alapjáraton nem true
    })
  }
  return (
    <>
    <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick} mainClick={mainClick}/>
    <br />
      <Container>
      {state.loggedIn===false && state.page==="main" &&(<Main loginClick={loginClick} registerClick={registerClick}/>)}
      {state.loggedIn===false && state.page==="login" &&(<Login />)}
      {state.loggedIn===false && state.page==="register" &&(<Register />)}
      <hr />
      <p className='centering'> bejelentkezés utáni:</p>
      <hr />
      <Tabsbar createQuizClick={createQuizClick}/>
      {state.loggedIn===true && state.page==="createQuiz" &&(<CreateQuiz />)}
      </Container>
    </>
  );

}




export default App;
