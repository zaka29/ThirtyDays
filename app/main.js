import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AppRegistry} from 'react-native';
import AppReducer from './reducers/index.js';
import ThirtyDaysNavigationState from './navigators/ThirtyDaysNavigator.js';


class ThirtyDays extends Component {
    store = createStore (
        AppReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
            )
        ));

    render () {
        return(
            <Provider store={this.store}>
                <ThirtyDaysNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ThirtyDays', () => ThirtyDays);

export default ThirtyDays;
