import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import {ThirtyDaysFirebase} from '../../services/firebase.js';
import {NavigationActions} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import {SplashScreenMain} from './styling/components.js';

class SplashView extends Component {

    componentDidMount() {
        const {navigation} = this.props;

        ThirtyDaysFirebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('logged in user ', user);
                navigation.dispatch( NavigationActions.navigate({routeName: 'Home'}));
                // actions.userStatusUpdate(user);

            } else {
                console.log('no user', user);
                // No user is signed in.
                navigation.dispatch( NavigationActions.navigate({routeName: 'Start'}));
                // actions.userStatusUpdate();
            }
            SplashScreen.hide();
        });
    }

    render() {

        return (
            <SplashScreenMain>



            </SplashScreenMain>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    }
}

export default connect(mapStateToProps)(SplashView);

