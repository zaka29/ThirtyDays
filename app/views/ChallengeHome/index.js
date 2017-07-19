/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import ChallengeHomeStyles from './styles.js';

class ChallengeHome extends Component {
  
  static navigationOptions = {
        title: '30 Days Challenge',
    };

  render() {
    
    const {dispatch, navigation} = this.props;
   
    return (
      
      <View style={ChallengeHomeStyles.container}>
        
        <Text style={ChallengeHomeStyles.welcome}>
          30 Days Challenge
        </Text>

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

        <TouchableHighlight style={{borderRadius: 10}} underlayColor="#1F87DD" onPress={()=>{ dispatch(NavigationActions.navigate({routeName: 'NewChallenge'})) }}>
          <View style={{padding: 10, backgroundColor: "#2EA0FE", borderWidth: 1, borderRadius: 10, borderColor: "#1F87DD"}}>
            <Text style={ChallengeHomeStyles.instructionsButtonText}>
              START A CHALLENGE!!!
            </Text>
          </View> 
        </TouchableHighlight>
          
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  }
}

export default connect(mapStateToProps)(ChallengeHome);

