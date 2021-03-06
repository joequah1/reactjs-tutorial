import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../app/App';
import Home from '../app/components/home/Home';
import About from '../app/components/about/About';
import Contact from '../app/components/contact/Contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={Contact} />
        </Route>
    </Router>
, document.getElementById('app'))

