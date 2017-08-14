import { combineReducers } from 'redux';
import navReducer from './navigationReducer.js';
import homeReducer from './homeView.js';
import loginReducer from '../views/LoginView/reducer.js';

const AppReducer = combineReducers({
    navigation: navReducer,
    homeView: homeReducer,
    loginView: loginReducer,
});

export default AppReducer;