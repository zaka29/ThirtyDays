import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View } from 'react-native';
import {DisplayTodayMain, AppHeaderText, DisplayTodayTextContainer} from './styling/components.js';

const DisplayToday = ({today}) => (
    <DisplayTodayMain>
        <DisplayTodayTextContainer>
            <AppHeaderText>TODAY</AppHeaderText>
        </DisplayTodayTextContainer>
        <DisplayTodayTextContainer>
            <AppHeaderText>{today}</AppHeaderText>
        </DisplayTodayTextContainer>
    </DisplayTodayMain>
);

DisplayToday.PropTypes = {
    today: PropTypes.number.isRequired,
}

export default DisplayToday;