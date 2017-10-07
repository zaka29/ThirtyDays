import * as actions from './actionTypes.js';

const initialState = {
    userId: '',
    name: '',
    startDate: Date,
    endDate: Date,
    progress: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.NEW_CHALLENGE_UPDATE_NAME :

            return {
                ...state,
            };

        case actions.NEW_CHALLENGE_UPDATE_START_DATE :

            return {
                ...state,
            };

        case actions.NEW_CHALLENGE_UPDATE_END_DATE :

            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reducer;