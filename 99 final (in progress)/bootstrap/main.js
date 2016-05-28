import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../app/App';
import Home from '../app/components/home/Home';
import About from '../app/components/about/About';
import Contact from '../app/components/contact/Contact';
import Login from '../app/components/login/Login';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} onEnter={About.willTransitionTo}/>
            <Route path="/contact-us" component={Contact} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>
, document.getElementById('app'))

