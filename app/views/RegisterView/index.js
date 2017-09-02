import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, } from 'react-native';
import TextField from 'react-native-md-textinput';

import { NavigationActions} from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { LoginViewMain, InputFieldsContainer, StyledText, TextDelimiterContainer, DelimiterText, ButtonsContainer, AppButtonTouchableHighLight, AppButton, AppButtonFacebook, AppButtonText, AppButtonIcon, AppHeading, AppHeadingText, InputFieldGroup, LinkText } from './styling/components.js';

import AppColors from '../../styles/AppColor.js'
import * as actions from './actions.js';

class RegisterView extends Component  {

    render () {

        const { email, password, verifiedPassword, isPasswordVerified, actions, isLoading, requestSuccess } = this.props;

        return (
            <LoginViewMain>

                <AppHeading>
                    <AppHeadingText>
                        SIGN UP
                    </AppHeadingText>
                </AppHeading>

                <InputFieldsContainer>

                    <InputFieldGroup>
                        <TextField
                            label={'Email'}
                            value={email}
                            onChangeText={(text) => {actions.onRegisterEmailChange(text)}}
                            highlightColor={AppColors.ui.brown}
                            labelColor={AppColors.main.oceanBlue}
                            borderColor={AppColors.main.oceanBlue}
                            keyboardType="email-address"
                        />
                    </InputFieldGroup>

                    <InputFieldGroup>
                        <TextField
                            label={'Password'}
                            value={password}
                            onChangeText={(text) => {
                                actions.onRegisterPasswordChange(text)
                                actions.verifyPasswordMatch()
                            }}
                            highlightColor={AppColors.ui.brown}
                            labelColor={AppColors.main.oceanBlue}
                            borderColor={AppColors.main.oceanBlue}
                            secureTextEntry={true}
                        />
                    </InputFieldGroup>

                    <InputFieldGroup>
                        <TextField
                            label={'Verify Password'}
                            value={verifiedPassword}
                            onChangeText={(text) => {
                                actions.onRegisterVerifyPasswordChange(text)
                                actions.verifyPasswordMatch()
                            }}
                            highlightColor={AppColors.ui.brown}
                            labelColor={AppColors.main.oceanBlue}
                            borderColor={AppColors.main.oceanBlue}
                            secureTextEntry={true}
                        />
                    </InputFieldGroup>

                </InputFieldsContainer>

                <ButtonsContainer>

                    <AppButtonTouchableHighLight underlayColor={AppColors.ui.brown} activeOpacity={0.8} onPress={() => {actions.requestUserCreateAccount(password, email)}}>
                        <AppButton orange>
                            <AppButtonText>
                                SIGN UP
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
                    <LinkText>
                        BACK
                    </LinkText>
                </TextDelimiterContainer>

                <InputFieldGroup>

                    {isLoading &&
                        <StyledText>
                            carry on..
                        </StyledText>
                    }

                    {requestSuccess &&
                        <StyledText>
                            Success..
                        </StyledText>
                    }

                </InputFieldGroup>

            </LoginViewMain>
        )
    }
};




const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state, ownProps) => {

    const {email, password, verifiedPassword, isPasswordVerified, isLoading, requestSuccess } = state.registerView;

    return {
        ...ownProps,
        email,
        password,
        verifiedPassword,
        isPasswordVerified,
        isLoading,
        requestSuccess,
    }
}

RegisterView.PropTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    verifiedPassword: PropTypes.string.isRequired,
    isPasswordVerified: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    requestSuccess: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
