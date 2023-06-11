import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { Pressable } from "react-native";
export const Container = styled.View`
    padding: ${RFValue(20)}px;
    width: 100%;
    height: 100%;

`;

export const ContentHeader = styled.View`
   padding-top: ${RFValue(30)}px;

`

export const ContentBody = styled.View`
    padding-top: ${RFValue(40)}px;;

`

export const Content = styled.View``

export const ViewButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    `

export const Title = styled.Text`

    font-size: ${RFValue(25)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};

`
export const Description = styled.Text`

    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(15)}px;
    margin-top: ${RFValue(40)}px;
    text-align: center;
    padding-bottom: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`

export const ContentFooter = styled.View`
    padding-top: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    `


export const ButtonSignUp = styled.Pressable`
flex-direction: row;
align-items: center;
justify-content: center;

`

export const TitleButtonSignUp = styled.Text`
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.COLORS.GRAY3};
font-family: ${({theme})=>theme.FONTS.POPPINSMEDIUM};


`
export const TitleButtonSignUp1 = styled.Text`
font-size:${RFValue(17)}px;
color: ${({theme})=>theme.COLORS.BLUE};
margin-left: ${RFValue(10)}px;
font-family: ${({theme})=>theme.FONTS.POPPINSBOLD};

`
export const ContentForgotPassword =  styled.View`
width: 100%;
align-items: flex-end;
justify-content: flex-end;
padding: 20px 0px;
margin-top: 20px;
`


export const ContentButtonForgotPassword = styled.Pressable`
justify-content: flex-end;

`
export const ContentTtileForgotPassword = styled.Text`
font-family: ${({theme})=>theme.FONTS.POPPINSREGULAR};
align-items: flex-end;
font-size:${RFValue(17)}px;
color: ${({theme})=>theme.COLORS.GRAY3};
`

