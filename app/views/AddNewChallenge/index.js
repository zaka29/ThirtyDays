/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AddNewChallengeStyles from './styles.js';

export default class AddNewChallenge extends Component {
  render() {
    return (
      <View style={AddNewChallengeStyles.container}>
        <Text style={AddNewChallengeStyles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={AddNewChallengeStyles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={AddNewChallengeStyles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
