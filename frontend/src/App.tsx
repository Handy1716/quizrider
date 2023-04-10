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
import { apiCreator, apiLogin } from './api/api';
import { PAGES } from './pages';


// TODO: state-bol az error kivenni
// TODO: a signup-ot ugyanugy mint a loginnal, a komponensbe betenni


function App() {
  
  const [state, setState] = useState<{page: PAGES, loggedIn: boolean, creator: any, error: string}>({
    page: PAGES.main,
    loggedIn: false,
    creator: null,
    error: "",
  });



  function loginClick() {
    setState({
      page: PAGES.login,
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error,
    });
  }
  function registerClick() {
    setState({
      page: PAGES.register,
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error
    });
  }
  function mainClick() {
    setState({
      page: PAGES.main,
      loggedIn: state.loggedIn,
      creator: state.creator,
      error: state.error
    })
  }
  function createQuizClick(){
    setState({
      page: PAGES.createQuiz,
      loggedIn: true, //TODO: ez alapjáraton nem true
      creator: state.creator,
      error: state.error
    })
  }
  function submitLogin(result: any){
    console.log(result);
    // TODO token
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
          page: PAGES.logged,
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
  function Logout() {
    setState({
      page: PAGES.main,
      loggedIn: false,
      creator: null,
      error: state.error,
    })
  }
  return (
    <>
    <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick} mainClick={mainClick}/>
    <div className='background'>
    <br />
      <div className=''>
      {state.loggedIn===false && state.page===PAGES.main &&(<Main />)}
      {state.loggedIn===false && state.page===PAGES.login &&(<Login submitLogin={submitLogin}/>)}
      {state.loggedIn===false && state.page===PAGES.register &&(<Register submitSignUp={submitSignUp} message={state.error}/>)}
      </div>
      
      <Button onClick={Logout}>Logout</Button>
      <hr />
      
      <p className='centering'> bejelentkezés utáni:</p>
      <hr />
    

      <Container>
        <br /><br />
      <Tabsbar createQuizClick={createQuizClick}/>
      {state.loggedIn===true && state.page===PAGES.createQuiz &&(<CreateQuiz />)}
      </Container>
      <br /><br />
      <Game/>
      
      </div>
      <Scoreboard />
    </>
  );

}




export default App;
