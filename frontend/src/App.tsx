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
import { clearToken, getToken, setToken } from './api/session';


function App() {
  let userLogged = false;
  if(getToken()!==null) { 
   userLogged =true;
   } 
  const [state, setState] = useState<{page: PAGES, loggedIn: boolean, creator: any}>({
    page: PAGES.main,
    loggedIn: userLogged,
    creator: null,
  });

  function loginClick() {
    setState({
      page: PAGES.login,
      loggedIn: state.loggedIn,
      creator: state.creator,
    });
  }
  function registerClick() {
    setState({
      page: PAGES.register,
      loggedIn: state.loggedIn,
      creator: state.creator,
    });
  }
  function mainClick() {
    setState({
      page: PAGES.main,
      loggedIn: state.loggedIn,
      creator: state.creator,
    })
  }
  function createQuizClick(){
  }
  function submitLogin(result: any){
    setToken(result.token)
    setState({
      page: PAGES.main,
      loggedIn: true,
      creator: state.creator,
    })
  }
  
  function Logout() {
    setState({
      page: PAGES.main,
      loggedIn: false,
      creator: null,
    })
    clearToken();
  }
  return (
    <>
    <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick} mainClick={mainClick} logoutClick={Logout}/>
    <div className='background'>
    <br />
      {state.loggedIn===false && state.page===PAGES.main &&(<Main />)}
      {state.loggedIn===false && state.page===PAGES.login &&(<Login submitLogin={submitLogin}/>)}
      {state.loggedIn===false && state.page===PAGES.register &&(<Register submitLogin={submitLogin}/>)}
      {state.loggedIn===true && state.page===PAGES.main &&(<Tabsbar createQuizClick={createQuizClick}/>)}
      {state.loggedIn===false && state.page===PAGES.game &&(<Game/>)}
      {state.loggedIn===true && state.page===PAGES.scoreboard &&(<Scoreboard/>)}
      
      </div>
    </>
  );

}




export default App;
