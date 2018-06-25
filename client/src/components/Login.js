import React, {Component} from 'react';
import axios from 'axios'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    // Update on Changes

    UpdateField = event => { this.setState({ [event.target.name]: event.target.value })}

    // Handle Submit
    

    Submit = (event) => {
        event.preventDefault();
        console.log('testest')
        const user = this.state    
        console.log(user)
        axios.post(`http://localhost:3030/reg`, {user})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }


    render() {
        return (
            <div>
                <form>
                <div>
                  <input type="text" name="email" placeholder="Email" id="email" onChange={this.UpdateField} />
                  <input type="password" name="password" placeholder="Password" id="password" onChange={this.UpdateField} />
                </div>
                <button onClick={this.Submit} type="button">Confirm</button>
                </form>
            </div>

        )
    }
}

export default Login;