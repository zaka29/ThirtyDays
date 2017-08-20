import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, } from 'react-native';
import { NavigationActions} from 'react-navigation';
import { LoginViewMain, StyledView, StyledText, StyledTextInput, ButtonViewStyled, ButtonTextStyled } from './styling/components.js';
import * as actions from './actions.js';

class LoginView extends Component  {

    render () {

        const { email, navigation, dispatch, password, user, actions } = this.props;

        return (
            <LoginViewMain>

                <StyledView>
                    <StyledText>User Name</StyledText>
                    <StyledTextInput
                        value={email}
                        onChangeText={(text) => {actions.onEmailChange(text)}}
                        keyboardType="email-address"
                        placeholder="email@email.com"
                        placeholderTextColor="#CACFD2" />

                </StyledView>

                <StyledView>
                    <StyledText>User Password</StyledText>
                    <StyledTextInput
                        value={password}
                        onChangeText={(text) => {actions.onPasswordChange(text)}}
                        secureTextEntry={true}
                        placeholder="••••••"
                        placeholderTextColor="#CACFD2" />

                </StyledView>

                <StyledView>
                    <TouchableHighlight
                        style={{borderRadius: 10}}
                        underlayColor="#1F87DD"
                        onPress={() => {actions.requestLogin(password, email)}}>

                        <ButtonViewStyled>
                            <ButtonTextStyled>
                                LOG IN
                            </ButtonTextStyled>
                        </ButtonViewStyled>

                    </TouchableHighlight>
                </StyledView>

                <StyledView>
                    <TouchableHighlight onPress={()=>{
                        navigation.dispatch( NavigationActions.navigate({routeName: 'Register'}))
                    }}>
                        <StyledText>Create Account -></StyledText>
                    </TouchableHighlight>
                </StyledView>


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
