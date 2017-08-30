import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, InputText, TouchableHighlight, Image } from 'react-native';
import Images from '../../assets/images.js';
import {StartViewMain, ContainerLogo, Logo, LogoImage, MountainsContainer, MountainsImage, AppHeading, AppHeadingText, StartViewButtons, AppButtonFacebook, AppButton, AppButtonText } from './styling/components.js';

import * as actions from './actions.js';

class StartView extends Component  {

    render () {

        return (
            <StartViewMain>

                <ContainerLogo>
                    <Logo>
                        <LogoImage source={Images.ThirtyDaysLogo} />
                    </Logo>

                    <MountainsContainer>
                        <MountainsImage source={Images.MountainRange} />
                    </MountainsContainer>

                </ContainerLogo>

                <AppHeading>
                    <AppHeadingText>
                        CHALLENGE
                    </AppHeadingText>
                </AppHeading>

                <StartViewButtons>
                    <AppButton orange>
                        <AppButtonText>
                            SIGN UP WITH EMAIL
                        </AppButtonText>
                    </AppButton>

                    <AppButtonFacebook>

                        <AppButtonText>
                            CONTINUE WITH FACEBOOK
                        </AppButtonText>
                    </AppButtonFacebook>

                </StartViewButtons>
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
