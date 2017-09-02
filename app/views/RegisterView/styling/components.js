import styled from 'styled-components/native';
import AppColors from '../../../styles/AppColor.js'

export const LoginViewMain = styled.View`
    padding-top:100px;
    height:100%;
    background-color:${AppColors.main.turquoiseDark};
`;

export const AppHeading = styled.View`
    border-top-width:1px;
    border-bottom-width:1px;
    border-color:${AppColors.main.purpleDark}
    padding:10px 0;
    background-color: ${AppColors.main.whiteWall}
`;

export const AppHeadingText = styled.Text`
    color: ${AppColors.main.oceanBlue};
    font-size: 46px;
    font-weight:300;
    text-align:center;
`;

export const InputFieldsContainer = styled.View`
    padding:15px;
`;

export const InputFieldGroup = styled.View`
    margin-bottom:15px;
`;

export const ButtonsContainer = styled.View`
    padding:20px 20px;
    background-color: ${AppColors.main.mountainSlope}
    justify-content: center;
`;

// move to common reusable styled components
export const AppButtonTouchableHighLight = styled.TouchableHighlight`
    border-radius:3px;
    margin-bottom:15px;
`;

export const AppButtonFacebook = styled.View`
    height:60px;
    background-color: ${AppColors.ui.FBBlue};
    align-items: center;
    border-width: 1px;
    border-color: ${AppColors.ui.FBBlueDark};
    border-radius: 3px;
    flex-direction: row;
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


export const StyledTextInput = styled.TextInput`
    color: #89A6AC;
    font-size: 14px;
`;

export const StyledText = styled.Text`
  color: palevioletred;
`;

export const ButtonViewStyled = styled.View`
    padding: 10px;
    backgroundColor:#2EA0FE;
    borderWidth: 1px;
    borderRadius: 10px;
    borderColor:#1F87DD;
`;

export const ButtonTextStyled = styled.Text`
    text-align: center;
    color: #fff;
`;