import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, } from 'react-native';
import TextField from 'react-native-md-textinput';
import { NavigationActions} from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { LoginViewMain, AppHeading, AppHeadingText, InputFieldsContainer, InputFieldGroup, ButtonsContainer, AppButtonTouchableHighLight, AppButton, AppButtonText, AppButtonFacebook, AppButtonIcon, TextDelimiterContainer, DelimiterText, LinkTextTouchableHighlight, LinkText } from './styling/components.js';
import AppColors from '../../styles/AppColor.js'
import * as actions from './actions.js';

class LoginView extends Component  {

    render () {

        const { email, navigation, password, actions } = this.props;

        return (
            <LoginViewMain>

                <AppHeading>
                    <AppHeadingText>
                        LOG IN
                    </AppHeadingText>
                </AppHeading>

                <InputFieldsContainer>
                    <InputFieldGroup>
                        <TextField
                            label={'Email'}
                            value={email}
                            onChangeText={(text) => {actions.onEmailChange(text)}}
                            highlightColor={AppColors.ui.brown}
                            labelColor={AppColors.main.oceanBlue}
                            borderColor={AppColors.main.oceanBlue}
                            keyboardType="email-address"
                            placeholderTextColor="#CACFD2" />
                    </InputFieldGroup>

                    <InputFieldGroup>
                        <TextField
                            label={'Password'}
                            value={password}
                            onChangeText={(text) => {actions.onPasswordChange(text)}}
                            highlightColor={AppColors.ui.brown}
                            labelColor={AppColors.main.oceanBlue}
                            borderColor={AppColors.main.oceanBlue}
                            secureTextEntry={true}
                            placeholderTextColor="#CACFD2" />
                    </InputFieldGroup>
                </InputFieldsContainer>

                <ButtonsContainer>
                    <AppButtonTouchableHighLight underlayColor={AppColors.ui.brown} activeOpacity={0.8} onPress={() => {actions.requestLogin(password, email)}}>
                        <AppButton orange>
                            <AppButtonText>
                                LOG IN
                            </AppButtonText>
                        </AppButton>
                    </AppButtonTouchableHighLight>

                    <TextDelimiterContainer>
                        <DelimiterText>
                            OR
                        </DelimiterText>
                    </TextDelimiterContainer>

                    <AppButtonFacebook>
                        <AppButtonIcon>
                            <FontAwesome>{Icons.facebook}</FontAwesome>
                        </AppButtonIcon>
                        <AppButtonText>
                            CONTINUE WITH FACEBOOK
                        </AppButtonText>
                    </AppButtonFacebook>

                </ButtonsContainer>

                <TextDelimiterContainer>
                    <LinkTextTouchableHighlight underlayColor={AppColors.main.turquoiseDark} activeOpacity={.9} onPress={()=>{
                        navigation.dispatch( NavigationActions.navigate({routeName: 'Register'}))
                    }}>
                        <LinkText> Create Account </LinkText>
                    </LinkTextTouchableHighlight>
                </TextDelimiterContainer>

            </LoginViewMain>
        )
    }
};


LoginView.PropTypes = {
    total: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {

    const {email, password, user} = state.loginView;

    return {
        ...ownProps,
        email,
        password,
        user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
