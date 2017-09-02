import * as actions from './actionTypes.js';

const initialState = {
    isLoading: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.START_API_READY:

            return {
                ...state,
                isLoading: false,

            };

        default:
            return state;
    }
};

export default reducer;