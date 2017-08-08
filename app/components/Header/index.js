import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DisplayToday from './DisplayToday.js';
import DisplayTotal from './DisplayTotal.js';
import {StyledView} from './styling/components.js';

const AppHeader = ({total, today, styles}) => (

    <StyledView>
        <DisplayTotal total={total} />
        <DisplayToday today={today} />
    </StyledView>
);

AppHeader.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default AppHeader;