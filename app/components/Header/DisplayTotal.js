import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, Text } from 'react-native';
import {AppHeaderText, DisplayTotalMain, DisplayTotalTextContainer} from './styling/components.js';

const DisplayTotal = ({total}) => (
    <DisplayTotalMain>
        <DisplayTotalTextContainer>
            <AppHeaderText>TOTAL</AppHeaderText>
        </DisplayTotalTextContainer>
        <DisplayTotalTextContainer>
            <AppHeaderText>{total}</AppHeaderText>
        </DisplayTotalTextContainer>
    </DisplayTotalMain>
);

DisplayTotal.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default DisplayTotal;