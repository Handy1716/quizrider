import { useState } from 'react';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';
import Main from './Components/main';
import Tabsbar from './Components/tabsbar';
import Game from './Components/game';
import Scoreboard from './Components/scoreboard';
import { PAGES } from './pages';
import { clearToken, getToken, setToken } from './api/session';
import { apiPlay, apiScoreboardShow } from './api/api';
import Result from './Components/result';



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
  const [quiz, setQuiz] = useState({});
  const [scoreboard, setScoreboard] = useState({});
  const [quizName, setQuizName] = useState({});
  const [result, setResult] = useState({});
  const [runCode, setRunCode] = useState("");

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

function startClick(event:any) {  
  apiPlay(event.target.runcode.value, (response:any) => {
    setRunCode(event.target.runcode.value);
    setQuiz(response.quiz);
    setState({
      page: PAGES.game,
      loggedIn: state.loggedIn,
      creator: state.creator,
    })
  })
  event.preventDefault();
  return false;
}
function onScoreboardClick(id:number, name:string){
  apiScoreboardShow(id, (response:any) => {
   setState({
    page: PAGES.scoreboard,
    loggedIn: state.loggedIn,
    creator: state.creator,
   })
   setScoreboard(response);
   setQuizName(name);
  })
  }
  function Finish(result: any){
    setResult(result);
    setState({
      page: PAGES.result,
      loggedIn: state.loggedIn,
      creator: state.creator,
     })
  }

function Return(){
  setState({
    page: PAGES.main,
    loggedIn: state.loggedIn,
    creator: state.creator,
   })
}

return (
    <>
    <Header page={state.page} loggedIn={state.loggedIn} loginClick={loginClick} registerClick={registerClick} mainClick={mainClick} logoutClick={Logout}/>
    <div className='background'>
    <br />
      {state.loggedIn===false && state.page===PAGES.main &&(<Main startClick={startClick}/>)}
      {state.loggedIn===false && state.page===PAGES.login &&(<Login submitLogin={submitLogin}/>)}
      {state.loggedIn===false && state.page===PAGES.register &&(<Register submitLogin={submitLogin}/>)}
      {state.loggedIn===true && state.page===PAGES.main &&(<Tabsbar createQuizClick={createQuizClick} onScoreboardClick={onScoreboardClick}/>)}
      {state.loggedIn===false && state.page===PAGES.game &&(<Game quiz={quiz} Finish={Finish}/>)}
      {state.loggedIn===true && state.page===PAGES.scoreboard &&(<Scoreboard scoreboard={scoreboard} quizName={quizName}/>)}
      {state.loggedIn===false && state.page===PAGES.result &&(<Result result={result} runCode={runCode} retur={Return}/>)}    
      </div>
    </>
  );

  }



export default App;
