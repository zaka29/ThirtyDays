import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const DisplayTotal = ({total}) => (
    <View>
        <View>
            <Text>TOTAL</Text>
        </View>
        <View>
            <Text>{total}</Text>
        </View>
    </View>
);

DisplayTotal.PropTypes = {
    total: PropTypes.number.isRequired,
}

export default DisplayTotal;