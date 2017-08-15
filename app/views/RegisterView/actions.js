import * as actionTypes from './actionTypes.js';
import { ThirtyDaysFirebase } from '../../services/firebase.js';

export const onRegisterEmailChange = (email) => {
    return {
        type: actionTypes.REGISTER_USER_EMAIL_CHANGE,
        email
    }
}

export const onRegisterPasswordChange = (password) => {
    return {
        type: actionTypes.REGISTER_USER_PASSWORD_CHANGE,
        password
    }
}

export const verifyPasswordMatch = (verifiedPassword) => (dispatch, getState) => {
    const password = getState().register.password;
    if (password === verifiedPassword) {
        dispatch({ type: actionTypes.REGISTER_VERIFY_PASSWORD_SUCCESS })
    } else {
        dispatch({ type: actionTypes.REGISTER_VERIFY_PASSWORD_ERROR })
    }
}

export const requestUserCreateAccount = ( password, email) => (dispatch, getState) => {

    const { isPasswordVerified } = getState().register;

    if (isPasswordVerified){
        dispatch({type: actionTypes.REGISTER_USER_REQUEST});

        // Implement Create Account here
        ThirtyDaysFirebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({type: actionTypes.REGISTER_USER_REQUEST_SUCCESS});
            // ...
        });
    }

}