
import Styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity} from "react-native";




const ButtonSocial = Styled(TouchableOpacity)`
 
align-items: center;
justify-content: center;
flex-direction: row;
margin-bottom: 16px;
margin:10px;
background-color:${({theme})=> theme.COLORS.GRAY6};
width: ${RFValue(130)}px;
height: ${RFValue(60)}px;
border-radius:${RFValue(15)}px;
shadow-color:rgba(0,0,0,1.2); 
shadow-offset: 3px 3px;
shadow-opacity: 0.2;
shadow-radius: 2px;
elevation: 3;

`;

const  IconGoogle = Styled.Image`
width: ${RFValue(28)}px;
height: ${RFValue(28)}px;
margin-right:10px;
`;

const ContainerButton = Styled.View`

flex-direction: row;
align-items: center;
`;

const Title = Styled.Text`
font-family: 'Quicksand';
font-size:${RFValue(17)}px;
color: ${({theme})=> theme.COLORS.GRAY};;
`;

export { ButtonSocial,IconGoogle,ContainerButton,Title}