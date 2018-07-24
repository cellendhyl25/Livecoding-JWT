import React, {Component} from 'react';

class Protected extends Component {

    componentWillMount () {
        const token = localStorage.getItem('token')
        if (token === null) { window.location.replace('/') } else {
          fetch(`http://localhost:3030/secure`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          ).then(response => {
            response.json().then(responseJson => {
              console.log(responseJson)
              if (responseJson === 'notlogged') {
                console.log('blop')
                window.location.replace('/loginadmin')
              }
            })
          })
        }
      }



    render() {
        return (
            <div>
                <h1>
                    THIS PAGE IS PROTECTED
                </h1>
            </div>
        );
    }
}

export default Protected;