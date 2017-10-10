import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Text, View, TouchableHighlight} from 'react-native';
import {NavigationActions} from 'react-navigation';
import * as actions from './actions.js';

import { AddNewChallengeMain, DelimiterText, SectionContainer, AppButton, AppButtonText, AppButtonTouchableHighLight } from './styling/components.js';
import AppColors from '../../styles/AppColor.js'

const AddNewChallenge = ({actions}) => (

    <AddNewChallengeMain>
        <DelimiterText>
            Add New Challenge
        </DelimiterText>
        <SectionContainer>
            <AppButtonTouchableHighLight
                underlayColor={AppColors.ui.brown}
                activeOpacity={0.8}
                onPress={() => { actions.createNewChallenge() }}
                >
                <AppButton>
                    <AppButtonText>
                        Start New Challenge
                    </AppButtonText>
                </AppButton>
            </AppButtonTouchableHighLight>
        </SectionContainer>
    </AddNewChallengeMain>
);

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewChallenge);
