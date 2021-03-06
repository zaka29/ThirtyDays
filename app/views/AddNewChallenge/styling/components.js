import styled from 'styled-components/native';
import AppColors from '../../../styles/AppColor.js'

export const AddNewChallengeMain = styled.View`
    padding-top:80px;
    height:100%;
    background-color:${AppColors.main.turquoiseDark};
`;

export const SectionContainer = styled.View`
    padding-top: 20px;
    padding-bottom:20px;
`;

//TO DO: Consider to reusable
export const AppButtonTouchableHighLight = styled.TouchableHighlight`
    border-radius:3px;
    margin-bottom:15px;
`;

export const AppButton = styled.View`
    background-color: ${props=>props.orange?
    AppColors.main.orange:
    AppColors.main.purpleFade};
    justify-content: center;
    align-items: center;
    border-width: 1px;
    height:60px;
    border-color: ${props=>props.orange?
    AppColors.ui.brown:
    AppColors.main.purpleFade};
    border-radius:3px;
    flex-direction:row;
`;

export const AppButtonText = styled.Text`
    color: ${AppColors.main.whiteWall};
    font-size: ${AppColors.fontSizeDefault}px;
    text-align:center;
    font-weight: 400;
    flex:1;
`;

export const AppButtonIcon = styled.Text`
    padding-left:30px;
    color:#fff;
    font-size:26px;
`;

export const DelimiterText = styled.Text`
       font-size:18px;
       color: ${AppColors.main.oceanBlue};
       text-align: center;
`;

export const LinkText = styled.Text`
    font-size:16px;
    color: ${AppColors.main.oceanBlue};
    text-align: center;
`;

export const LinkTextTouchableHighlight = styled.TouchableHighlight`
    margin-top:10px;
`;



