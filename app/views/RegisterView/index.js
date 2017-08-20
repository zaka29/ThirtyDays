import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, } from 'react-native';
import { NavigationActions} from 'react-navigation';
import { LoginViewMain, StyledView, StyledText, StyledTextInput, ButtonViewStyled, ButtonTextStyled } from './styling/components.js';
import * as actions from './actions.js';

class RegisterView extends Component  {

    render () {

        const { email, password, verifiedPassword, isPasswordVerified, actions, isLoading, requestSuccess } = this.props;

        return (
            <LoginViewMain>

                <StyledView>
                    <StyledText>User Email</StyledText>
                    <StyledTextInput
                        value={email}
                        onChangeText={(text) => {actions.onRegisterEmailChange(text)}}
                        keyboardType="email-address"
                        placeholder="email@email.com"
                        placeholderTextColor="#CACFD2" />

                </StyledView>

                <StyledView>
                    <StyledText>User Password</StyledText>
                    <StyledTextInput
                        value={password}
                        onChangeText={(text) => {
                            actions.onRegisterPasswordChange(text)
                            actions.verifyPasswordMatch()
                        }}
                        secureTextEntry={true}
                        placeholder="••••••"
                        placeholderTextColor="#CACFD2" />

                </StyledView>

                <StyledView>
                    <StyledText>Verify Password</StyledText>
                    <StyledTextInput
                        value={verifiedPassword}
                        onChangeText={(text) => {
                            actions.onRegisterVerifyPasswordChange(text)
                            actions.verifyPasswordMatch()
                        }}
                        secureTextEntry={true}
                        placeholder="••••••"
                        placeholderTextColor="#CACFD2" />

                </StyledView>

                <StyledView>
                    <StyledText>
                       Password Verification: { isPasswordVerified?'Verified - OK':'Password should match - Error'}
                    </StyledText>
                </StyledView>

                <StyledView>
                    <TouchableHighlight
                        style={{borderRadius: 10}}
                        underlayColor="#1F87DD"
                        onPress={() => {actions.requestUserCreateAccount(password, email)}}>

                        <ButtonViewStyled>
                            <ButtonTextStyled>
                                Sign In
                            </ButtonTextStyled>
                        </ButtonViewStyled>

                    </TouchableHighlight>
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

                </StyledView>

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
