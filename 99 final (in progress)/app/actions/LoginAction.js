export default {
    loginUser : (jwt) => {
        localStorage.setItem('jwt', jwt);
        
        AppDispatcher.dispatch({
            actionType : LOGIN_USER,
            jwt : jwt
        })
    }
}