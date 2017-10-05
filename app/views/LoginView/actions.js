import * as actionTypes from './actionTypes.js';
import { ThirtyDaysFirebase } from '../../services/firebase.js';

export const onEmailChange = (email) => {
    return {
        type: actionTypes.LOGIN_EMAIL_CHANGE,
        email
    }
}

export const onPasswordChange = (password) => {
    return {
        type: actionTypes.LOGIN_PASSWORD_CHANGE,
        password
    }
}

export const requestLogin = ( password, email) => (dispatch, getState) => {
    dispatch({type: actionTypes.LOGIN_REQUEST_LOGIN});

    // Implement Login Auth here
    ThirtyDaysFirebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login Error', errorMessage);
        // dispatch({type: actionTypes.LOGIN_REQUEST_LOGIN_SUCCESS});
    });
}