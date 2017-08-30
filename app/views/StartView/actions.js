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

export const onRegisterVerifyPasswordChange = (verifiedPassword) => {
    return {
        type: actionTypes.REGISTER_USER_VERIFIED_PASSWORD_CHANGE,
        verifiedPassword
    }
}

export const verifyPasswordMatch = () => (dispatch, getState) => {
    const { password, verifiedPassword } = getState().registerView;

    if (password === verifiedPassword) {
        dispatch({ type: actionTypes.REGISTER_VERIFY_PASSWORD_SUCCESS })
    } else {
        dispatch({ type: actionTypes.REGISTER_VERIFY_PASSWORD_ERROR })
    }
}

export const requestUserCreateAccount = ( password, email) => (dispatch, getState) => {

    const { isPasswordVerified } = getState().registerView;

    if (isPasswordVerified){
        dispatch({type: actionTypes.REGISTER_USER_REQUEST_ACCOUNT_CREATE});

        // Implement Create Account here
        ThirtyDaysFirebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            debugger
            dispatch({type: actionTypes.REGISTER_USER_REQUEST_SUCCESS});
            // ...
        });
    }

}