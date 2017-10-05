import * as actions from './actionTypes.js';

const initialState = {
    email: '',
    password: '',
    user: '',
    verifiedPassword: '',
    isPasswordVerified: false,
    isLoading: false,
    requestSuccess: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.REGISTER_USER_EMAIL_CHANGE:

            return {
                ...state,
                email: action.email,
            };

        case actions.REGISTER_USER_PASSWORD_CHANGE:

            return {
                ...state,
                password: action.password,
            };

        case actions.REGISTER_USER_VERIFIED_PASSWORD_CHANGE:

            return {
                ...state,
                verifiedPassword: action.verifiedPassword,
            };

        case actions.REGISTER_VERIFY_PASSWORD_SUCCESS:

            return {
                ...state,
                isPasswordVerified: true,
            };

        case actions.REGISTER_VERIFY_PASSWORD_ERROR:

            return {
                ...state,
                isPasswordVerified: false,
            }

        case actions.REGISTER_USER_REQUEST_ACCOUNT_CREATE:

            return {
                ...state,
                isLoading: true,
                requestSuccess: false,
            };

        case actions.REGISTER_USER_REQUEST_SUCCESS:

            return {
                ...state,
                isLoading: false,
                requestSuccess: true,
            };

        default:
            return state;
    }
};

export default reducer;