import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, Image } from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import { NavigationActions} from 'react-navigation';


import AppColors from '../../styles/AppColor.js'
import Images from '../../assets/images.js';
import {StartViewMain, ContainerLogo, Logo, LogoImage, MountainsContainer, MountainsImage, AppHeading, AppHeadingText, StartViewButtons, AppButtonFacebook, AppButton, AppButtonText, AppButtonIcon, AppButtonTouchableHighLight, TextDelimiterContainer, LinkText, LinkTextTouchableHighlight } from './styling/components.js';

import * as actions from './actions.js';

class StartView extends Component  {

    render () {
        const {navigation} = this.props;

        return (
            <StartViewMain>

                <ContainerLogo>
                    <Logo>
                        <LogoImage source={Images.ThirtyDaysLogo} />
                    </Logo>
                </ContainerLogo>

                <MountainsContainer>
                    <MountainsImage source={Images.MountainRange} />
                </MountainsContainer>

                <AppHeading>
                    <AppHeadingText>
                        CHALLENGE
                    </AppHeadingText>
                </AppHeading>

                <StartViewButtons>

                    <AppButtonTouchableHighLight underlayColor={AppColors.ui.brown} activeOpacity={0.8} onPress={()=>{
                        navigation.dispatch( NavigationActions.navigate({routeName: 'Login'}))
                    }}>
                        <AppButton orange>
                            <AppButtonText>
                                LOG IN
                            </AppButtonText>
                        </AppButton>
                    </AppButtonTouchableHighLight>

                    <AppButtonFacebook>
                        <AppButtonIcon>
                            <FontAwesome>{Icons.facebook}</FontAwesome>
                        </AppButtonIcon>
                        <AppButtonText>
                            CONTINUE WITH FACEBOOK
                        </AppButtonText>
                    </AppButtonFacebook>

                </StartViewButtons>

                <TextDelimiterContainer>
                    <LinkTextTouchableHighlight underlayColor={AppColors.main.mountainSlope} activeOpacity={.9} onPress={()=>{
                        navigation.dispatch(NavigationActions.navigate({routeName: 'Register'}))
                    }}>
                        <LinkText> SIGN UP WITH EMAIL </LinkText>
                    </LinkTextTouchableHighlight>
                </TextDelimiterContainer>

            </StartViewMain>
        )
    }
};


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

export default connect(mapStateToProps, mapDispatchToProps)(StartView);
