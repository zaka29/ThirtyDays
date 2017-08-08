import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View } from 'react-native';
import {StyledText} from './styling/components.js';

const DisplayToday = ({today}) => (
    <View>
        <View>
            <StyledText>TODAY</StyledText>
        </View>
        <View>
            <StyledText>{today}</StyledText>
        </View>
    </View>
);

DisplayToday.PropTypes = {
    today: PropTypes.number.isRequired,
}

export default DisplayToday;