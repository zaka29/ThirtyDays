import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, Text } from 'react-native';

const DisplayToday = ({today}) => (
    <View>
        <View>
            <Text>TODAY</Text>
        </View>
        <View>
            <Text>{today}</Text>
        </View>
    </View>
);

DisplayToday.PropTypes = {
    today: PropTypes.number.isRequired,
}

export default DisplayToday;