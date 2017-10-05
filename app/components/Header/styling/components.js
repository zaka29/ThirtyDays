import styled from 'styled-components/native';
import AppColors from '../../../styles/AppColor.js'

export const AppHeaderMain = styled.View`
    flex-direction:row;  
    background-color: ${AppColors.main.orange};
    height: 100px;
    align-items: center;
    padding:0 20px;
`;

export const DisplayTotalMain = styled.View`    
    padding:0 10px;
    border-right-width: 1px;
    border-color: ${AppColors.ui.brown};
`;

export const DisplayTodayMain = styled.View`    
    padding:0 10px;
`;

export const DisplayTotalTextContainer = styled.View`    
    padding-bottom: 10px;
`;

export const DisplayTodayTextContainer = styled.View`    
    padding-bottom: 10px;
`;

export const AppHeaderText = styled.Text`
  color: #fff;
`;