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
import Scoreboard from './Components/scoreboard';
import { apiCreator } from './api/api';


function App() {
  
  
  const [state, setState] = useState<{page: string, loggedIn: boolean, creator: any, error: string}>({
    page: "main",
    loggedIn: false,
    creator: null,
    error: "",
  });



  function loginClick() {
    setState({
      page: "login",
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error,
    });
  }
  function registerClick() {
    setState({
      page: "register",
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error
    });
  }
  function mainClick() {
    setState({
      page: "main",
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error
    })
  }
  function createQuizClick(){
    setState({
      page: "createQuiz",
      loggedIn: true, //TODO: ez alapjáraton nem true
      creator: state.creator,
      error: state.error
    })
  }
  function submitSignUp(e:any){
    // TODO: password check
    apiCreator(
      {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      },
      (result:any)=> {
        setState({
          page: state.page,
          loggedIn: true,
          creator: result,
          error: "",
        })

      },
      (error:any)=>{
        setState({
          page: state.page,
          loggedIn: state.loggedIn,
          creator: state.creator,
          error: error.message,
        })
      }
      );
    e.preventDefault();
    return false;
  }
  return (
    <>
    <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick} mainClick={mainClick}/>
    <div className='background'>
    <br />
      <div className=''>
      {state.loggedIn===false && state.page==="main" &&(<Main />)}
      {state.loggedIn===false && state.page==="login" &&(<Login />)}
      {state.loggedIn===false && state.page==="register" &&(<Register submitSignUp={submitSignUp} message={state.error}/>)}
      </div>
      
      <hr />
      
      <p className='centering'> bejelentkezés utáni:</p>
      <hr />
    

      <Container>
        <br /><br />
      <Tabsbar createQuizClick={createQuizClick}/>
      {state.loggedIn===true && state.page==="createQuiz" &&(<CreateQuiz />)}
      </Container>
      <br /><br />
      <Game/>
      
      </div>
      <Scoreboard />
    </>
  );

}




export default App;
