import styled, { css } from "styled-components/native";
import { TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`

width: 100%;
height: 50px;
align-items:center;
justify-content:center;
margin-top: ${RFValue(15)}px;
border-radius:10px;
opacity: 1;
background-color: ${({theme})=>theme.COLORS.PURPLE1};

`;

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
font-family:${({theme})=>theme.FONTS.POPPINSMEDIUM};
color: ${({theme})=>theme.COLORS.WHITE_100 };

`;


export const Content = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;

`;

