import * as actions from './actionTypes.js';

const initialState = {
    isLoaded: false,
    email: '',
    password: '',
    user: '',
    loginSuccess: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.LOGIN_EMAIL_CHANGE:

            return {
                ...state,
                email: action.email,
            };

        case actions.LOGIN_PASSWORD_CHANGE:

            return {
                ...state,
                password: action.password,
            };

        case actions.LOGIN_REQUEST_LOGIN:

            return {
                ...state,
            };

        case actions.LOGIN_REQUEST_LOGIN_SUCCESS:

            return {
                ...state,
                loginSuccess: true,
            };

        default:
            return state;
    }
};

export default reducer;