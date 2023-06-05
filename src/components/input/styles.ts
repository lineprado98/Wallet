import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IContainerProps extends ViewProps {
    hasError: boolean;
    isFocused: boolean;
    isFilled?: boolean;
}
interface ItextContainerProps extends ViewProps {
    hasError: boolean;
    isFocused: boolean;
    isFilled?: boolean;
}
export const Container = styled.View`
    width: 85%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;;

`;

export const IContainer = styled.View<IContainerProps>`
width: ${RFValue(55)}px;
height: ${RFValue(50)}px;
justify-content: center;
align-items: center;
margin-bottom: ${RFValue(10)}px;

    ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width:${RFValue(55)}px;
    border-bottom-color:${({ theme }) => theme.COLORS.BLUE1};
    `};

    ${({ hasError }) => hasError && css`
    border-bottom-color:${({ theme }) => theme.COLORS.RED};
    `};
    margin-right:${RFValue(3)}px;
    border-top-left-radius:${RFValue(3)}px;
    border-bottom-left-radius:${RFValue(3)}px;
    background-color:${({ theme }) => theme.COLORS.GRAY5};


`;

export const InputText= styled(TextInput)<ItextContainerProps>`
flex: 1;
font-size:${RFValue(12)}px;
border-top-right-radius: ${RFValue(5)}px;
border-bottom-right-radius: ${RFValue(5)}px;
color: ${({ theme }) => theme.COLORS.GRAY4};
/* font-family: ${({ theme }) => theme.FONTS.POPPINSlIGHT}; */
background-color:${({ theme }) => theme.COLORS.GRAY5};

${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
    border-bottom-width:${RFValue(55)}px;
    border-bottom-color:${({ theme }) => theme.COLORS.BLUE1};
    `};

    ${({ hasError }) => hasError && css`
    border-bottom-color:${({ theme }) => theme.COLORS.RED};
    `};

    padding: 0 ${RFValue(10)}px;

`;
