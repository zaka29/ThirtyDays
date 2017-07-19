import { NavigationActions } from 'react-navigation';

import {ThirtyDaysNavigator} from '../navigators/ThirtyDaysNavigator.js';

const firstAction = ThirtyDaysNavigator.router.getActionForPathAndParams('Home');
const initialState = ThirtyDaysNavigator.router.getStateForAction(firstAction);


const reducer = (state = initialState, action) => {
    const nextState = ThirtyDaysNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default reducer;