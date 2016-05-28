import when from 'when';
import request from 'reqwest';

import LoginAction from '../actions/LoginAction.js';

class AuthService {
    
    login (username, password) {
        return when(
            request ({
                url : 'http://lumen.api.local/api/v1/user/login',
                method : 'POST',
                crossOrigin : true,
                type : 'json',
                data : {
                    username, password
                }
            }).then(function (response) {
                let jwt = response.id_token;
                
                console.log(jwt)
                
                LoginAction.loginUser(jwt);
                
                return true;
            })
        );
    }
    
    logout () {
        LoginAction.logoutUser();
    }
}

export default new AuthService();