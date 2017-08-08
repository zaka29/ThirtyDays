import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import ChallengeHome from '../views/ChallengeHome/index.js'
import AddNewChallenge from '../views/AddNewChallenge/index.js'

export const ThirtyDaysNavigator = StackNavigator({
    Home: { screen: ChallengeHome },
    NewChallenge: { screen: AddNewChallenge },
}, {
    headerMode: 'none',
});

const ThirtyDaysNavigationState = ({ dispatch, navigation }) => (
  <ThirtyDaysNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

ThirtyDaysNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    navigation: state.navigation,
});


export default connect(mapStateToProps)(ThirtyDaysNavigationState);