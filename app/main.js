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

import MainStyles from './Main/styles.js';

export default class ThirtyDays extends Component {
  render() {
    return (
      <View style={MainStyles.container}>
        <Text style={MainStyles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={MainStyles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={MainStyles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('ThirtyDays', () => ThirtyDays);
