import * as actions from './actionTypes.js';

const initialState = {
    isLoaded: false,
    forToday: 0,
    total: 0,
    challenges: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.REQUEST_CHALLENGES_COMPLETE:

            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reducer;