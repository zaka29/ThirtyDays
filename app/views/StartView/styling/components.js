import styled from 'styled-components/native';
import AppColors from '../../../styles/AppColor.js'


export const StartViewMain = styled.View`
    height:100%;
    padding:20px;
    background-color:${AppColors.main.turquoiseDark};
`;

export const ContainerLogo = styled.View`
    justify-content: space-between;
`;

export const Logo = styled.View`
    justify-content: center;
`;

export const LogoImage = styled.Image`
    width:164px;
    height:150px;
`

export const MountainsContainer = styled.View`
    align-items:flex-end;
`;

export const MountainsImage = styled.View`
    width: 100%;
    height:113px;
    resize-mode:repeat;
`;

export const AppHeading = styled.View`
    border-top-width:1px;
    border-bottom-width:1px;
    border-color:${AppColors.main.purpleDark}
    padding:10px 0;
    background-color: ${AppColors.main.whiteWall}
    justify-content: center;
`;

export const AppHeadingText = styled.Text`
    color: ${AppColors.main.oceanBlue};
    font-size: 46px;
`;

export const StartViewButtons = styled.View`
    padding:15px 0;
    background-color: ${AppColors.main.mountainSlope}
    justify-content: center;
`;

//TO DO: Consider to reusable
export const AppButtonFacebook = View.styled`
    padding:10px 0;
    background-color: ${AppColors.ui.FBBlue};
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${AppColors.ui.FBBlueDark};
    border-radius: 3px;
`;

export const AppButton = styled.View`
    padding:10px 0;
    background-color: ${props=>props.orange?
        AppColors.main.orange:
            AppColors.main.purpleFade};
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${props=>props.orange?
        AppColors.ui.brown:
            AppColors.main.purpleFade};
    border-radius:3px;
`;

export const AppButtonText = styled.Text`
    color: ${AppColors.main.whiteWall};
    font-size: ${AppColors.fontSizeDefault}px;
    font-weight: 300;
`;