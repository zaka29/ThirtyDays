import { combineReducers } from 'redux';
import navReducer from './navigationReducer.js';


const AppReducer = combineReducers({
    navigation: navReducer,
});

export default AppReducer;