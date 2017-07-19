/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import ChallengeHomeStyles from './styles.js';

export default class ChallengeHome extends Component {
  
  static navigationOptions = {
        title: '30 Days Challenge',
    };

  render() {
    return (
      <View style={ChallengeHomeStyles.container}>
        <Text style={ChallengeHomeStyles.welcome}>
          30 Days Challenge
        </Text>
        <Text style={ChallengeHomeStyles.instructions}>
          Are you ready to take a chllenge? Hit a button bellow..!
        </Text>
        <TouchableHighlight>
          <Text style={ChallengeHomeStyles.instructions}>
            START A CHALLENGE!!!
          </Text>
        </TouchableHighlight>  
      </View>
    );
  }
}
