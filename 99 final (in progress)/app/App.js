import React from 'react';
import NavLink from './utils/NavLink';

import Home from './components/home/Home';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            name : "World"
        };
        this.update = this.update.bind(this);
    }
    
    update (e) {
        this.setState({
            name : e.target.value 
        });
    }

    render(){
        return (
            <div>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
                
                {this.props.children || <Home />}
            </div>
        )
    }
}

export default App;