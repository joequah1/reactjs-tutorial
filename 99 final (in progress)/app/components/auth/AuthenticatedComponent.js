import React from 'react';
import LoginStore from '../../stores/LoginStore';
import { push, router, Router, Route, browserHistory, IndexRoute, withRouter } from 'react-router';

export default (ComposedComponent) => {
    return class AuthenticatedComponent extends React.Component {
        
        static willTransitionTo (param, transition) {
            console.log('to')
            if (!LoginStore.isLoggedIn()) {
                transition('/login');
            }
        }
        
        constructor() {
            super()
            this.state = this._getLoginState(); console.log(this.state)
        }

        _getLoginState() {
            return {
                userLoggedIn: LoginStore.isLoggedIn(),
                user: LoginStore.user,
                jwt: LoginStore.jwt
            };
        }

        componentDidMount() {
            this.changeListener = this._onChange.bind(this);
            LoginStore.addChangeListener(this.changeListener);
        }

        _onChange() {
            this.setState(this._getLoginState());
        }

        componentWillUnmount() {
            LoginStore.removeChangeListener(this.changeListener);
        }

        render() {
            return ( <
                ComposedComponent {...this.props
                }
                user = {
                    this.state.user
                }
                jwt = {
                    this.state.jwt
                }
                userLoggedIn = {
                    this.state.userLoggedIn
                }
                />
            );
        }
    }
};