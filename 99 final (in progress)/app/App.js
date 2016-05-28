import React from 'react';
import NavLink from './utils/NavLink';

import Home from './components/home/Home';
import LoginStore from './stores/LoginStore';

class App extends React.Component {
    
    constructor() {
        super();
        
        this.state = this._getLoginState();
        this.changeListener = this._onChange.bind(this);
    }
    
    componentWillMount () {
        console.log('app mounting');
    }

    componentDidMount() {
        LoginStore.addChangeListener(this.changeListener);
    }
    
    componentWillUnmount () {
        console.log('app unmount');
    }
    
    _getLoginState () {
        return { isLogin : LoginStore.isLoggedIn() };
    }
    
    _onChange () {
        this.setState(this._getLoginState());
    }
    
    render(){
        return (
            <div>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
            
                    {this.headerItems}
                </ul>
                {this.props.children || <Home />}
            </div>
        )
    }
    
    get headerItems () {
        if (this.state.isLogin) {
            return (
                <li>login</li>
            );
        } else {
            return (
                <li>logout</li>
            )
        }
    }
}

export default App;