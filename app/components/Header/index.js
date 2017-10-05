import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DisplayToday from './DisplayToday.js';
import DisplayTotal from './DisplayTotal.js';
import {AppHeaderMain} from './styling/components.js';

const AppHeader = ({total, today, styles}) => (

    <AppHeaderMain>
        <DisplayTotal total={total} />
        <DisplayToday today={today} />
    </AppHeaderMain>
);

AppHeader.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default AppHeader;