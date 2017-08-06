import { combineReducers } from 'redux';
import navReducer from './navigationReducer.js';
import homeReducer from './homeView.js';

const AppReducer = combineReducers({
    navigation: navReducer,
    homeView: homeReducer,
});

export default AppReducer;