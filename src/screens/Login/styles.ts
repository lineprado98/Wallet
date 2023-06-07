import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content:center;

`;

export const ContentHeader = styled.View`


`

export const ContentBody = styled.View`
width:100%;
padding: ${RFValue(20)}px;
`

export const ContentFooter = styled.View`
width:100%;`

export const Content = styled.View``

export const ViewButton = styled.View`
flex-direction: row;
padding: ${RFValue(20)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${({theme})=> theme.FONTS.POPPINSMEDIUM};

`
export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    margin-top: ${RFValue(40)}px;
    text-align: center;
    font-family: ${({theme})=> theme.FONTS.POPPINSLIGHT};
`