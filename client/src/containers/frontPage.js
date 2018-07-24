import React, { Component } from 'react';
import SignUP from '../components/SignUp';
import Login from '../components/Login';

class FrontPage extends Component {
    state = {  }
    render() {
        return (
            <div>
            <Login />
            <SignUP />
            </div>
        );
    }
}

export default FrontPage;