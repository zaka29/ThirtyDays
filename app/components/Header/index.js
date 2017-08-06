import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View } from 'react-native';
import DisplayToday from './DisplayToday.js';
import DisplayTotal from './DisplayTotal.js';
import AppHeaderStyles from './styles.js';

const AppHeader = ({total, today, styles}) => (
    <View style={AppHeaderStyles.container}>
        <DisplayTotal total={total} />
        <DisplayToday today={today} />
    </View>
);

AppHeader.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default AppHeader;