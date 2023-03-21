import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestingState from './Components/testingState';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Components/header';

function App() {
  return (
    <div>
      <Header loggin={true}/>
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <TestingState name='dsa' age={18}/>
      <br />
      <TestingState name='asd' age={13}/>
    </div>
  );
}




export default App;
