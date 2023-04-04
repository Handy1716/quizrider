import React, { useState } from 'react';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import { Container, Button } from 'react-bootstrap';
import Main from './Components/main';
import CreateQuiz from './Components/createQuiz';
import Tabsbar from './Components/tabsbar';
import Game from './Components/game';


function App() {
  
  //<div className="mainBoxElement"><Button onClick={loginClick}>Login</Button></div>
  //<div className="mainBoxElement"><Button onClick={registerClick}>Register</Button></div>
  
  
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
    <div className='background'>
    <br />
      <div className='main'>
      {state.loggedIn===false && state.page==="main" &&(<Main loginClick={loginClick} registerClick={registerClick}/>)}
      {state.loggedIn===false && state.page==="login" &&(<Login />)}
      {state.loggedIn===false && state.page==="register" &&(<Register />)}
      </div>
      
      <hr />
      
      <p className='centering'> bejelentkezés utáni:</p>
      <hr />

      <Container>
      <Tabsbar createQuizClick={createQuizClick}/>
      {state.loggedIn===true && state.page==="createQuiz" &&(<CreateQuiz />)}
      <Game />
      </Container>
      </div>
    </>
  );

}




export default App;
