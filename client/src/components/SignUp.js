import React, {Component} from 'react'
import axios from 'axios'

class SignUP extends Component {

    state = {
        username: '',
        password: ''
    }

    UpdateField = (event) => {this.setState({[event.target.name]: event.target.value})}

    Submit = (event) => {

        const user = this.state
        axios.post(`http://localhost:3030/register`, {user})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="username" placeholder="username" onChange={this.UpdateField}/>
                    <input type="password" name="password" placeholder="password" onChange={this.UpdateField}/>
                </form>
                <button type="button" onClick={this.Submit}>SignUp</button>
            </div>
        );
    }
}

export default SignUP;