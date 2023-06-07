import Styled from "styled-components/native"

export const Container = Styled.View`
justify-content:center;
width: 100%;
padding: 0 16px;
border-radius:8px;
background: ${({ theme }) => theme.COLORS.GRAY5};
height:45px;
margin-top:10px;
flex-direction:row ;
align-items:center;

`;

export const InputContainer = Styled.TextInput`
flex:1;
height: 45px;
border:0;
border-radius:8px;
font-size:14px
/* font-family: ${({ theme }) => theme.FONTS.POPPINSlIGHT};  */
`;