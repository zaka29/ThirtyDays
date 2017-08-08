import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, Text } from 'react-native';
import {StyledText} from './styling/components.js';

const DisplayTotal = ({total}) => (
    <View>
        <View>
            <StyledText>TOTAL</StyledText>
        </View>
        <View>
            <StyledText>{total}</StyledText>
        </View>
    </View>
);

DisplayTotal.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default DisplayTotal;