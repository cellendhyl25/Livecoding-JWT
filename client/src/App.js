import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUP from './components/SignUp';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SignUP />
       <Login />
      </div>
    );
  }
}

export default App;
