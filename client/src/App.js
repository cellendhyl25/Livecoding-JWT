import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FrontPage from './containers/frontPage';
import Login from './components/Login';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPage}/>
            <Route exact path="/protected" component={Protected} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
