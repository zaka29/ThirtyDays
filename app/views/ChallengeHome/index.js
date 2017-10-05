import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import AppHeader from '../../components/Header/index.js';
import {NavigationActions} from 'react-navigation';

import {ChallengeHomeMain} from './styling/components';

import ChallengeHomeStyles from './styles.js';


class ChallengeHome extends Component {

    render() {

        const { dispatch, forToday, total } = this.props;

        return (

            <ChallengeHomeMain>

                <AppHeader total={total} today={forToday} />

                <View>
                    <Text style={ChallengeHomeStyles.instructions}>
                        Are you ready to take a chllenge?
                    </Text>
                </View>

                <View>
                    <Text style={ChallengeHomeStyles.instructions}>
                        Hit a button bellow..!
                    </Text>
                </View>

                <TouchableHighlight style={{borderRadius: 10}} underlayColor="#1F87DD" onPress={() => {
                    dispatch(NavigationActions.navigate({routeName: 'NewChallenge'}))
                }}>
                    <View style={{
                        padding: 10,
                        backgroundColor: "#2EA0FE",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#1F87DD"
                    }}>
                        <Text style={ChallengeHomeStyles.instructionsButtonText}>
                            START A CHALLENGE!!!
                        </Text>
                    </View>
                </TouchableHighlight>

            </ChallengeHomeMain>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    }
}

export default connect(mapStateToProps)(ChallengeHome);

