import { View, Text, TextInputProps} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, InputContainer } from "./styles";
import theme from "@styles/theme";
interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName:string;
    iconSize?:number;
    iconColor?:string
}
const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon,iconName,iconColor,iconSize, ...rest }) => {

    return (

        <Container>

            {leftIcon && (
                <Icon 
                name={iconName} 
                size={iconSize} color={iconColor ||  theme.COLORS.BLACK} 
                style={{padding:5 }}/>
            )}

            <InputContainer {...rest}
            placeholderTextColor={theme.COLORS.GRAY3}/>

            {rightIcon && (
                <Icon
                name={iconName} 
                size={iconSize} color={iconColor ||  theme.COLORS.BLACK} 
                style={{padding:5}}
                ></Icon>
            )}
        </Container>
    )
}

export default Input