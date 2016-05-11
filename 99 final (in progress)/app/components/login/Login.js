import React from 'react';
import ReactDOM from 'react-dom';

import Auth from '../../services/AuthService';

class Login extends React.Component {
    constructor () {
        super ();
        this.state = {
            username : '',
            password : ''
        }
        this.login = this.login.bind(this);
    }
    
    login (e) {
        e.preventDefault();
        
        var _this = this;
        this.setState({
            username : ReactDOM.findDOMNode(this.refs.username).value,
            password : ReactDOM.findDOMNode(this.refs.password).value
        }, function () {
           console.log(_this.state);
            
            Auth.login(_this.state.username, _this.state.password)
        })
    }
    
    render () {
        return (
            <div>
                <form>
                    <div class="">
                        <label>Username</label>
                        <input type="text" ref="username" />
                    </div>
                    <div class="">
                        <label>Password</label>
                        <input type="password"  ref="password" />
                    </div>
                    <button type="submit" onClick={this.login} >Login</button>
                </form>
            </div>
        )
    }
}

export default Login;