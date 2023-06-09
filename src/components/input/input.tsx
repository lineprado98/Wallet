import { View, Text, TextInputProps, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, InputContainer } from "./styles";

import theme from "@styles/theme";
interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName:string;
    iconSize?:number;
    iconColor?:string;
    secureTextEntry?:boolean
}
const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon,iconName,iconColor,iconSize,  secureTextEntry, ...rest }) => {

    const [security, setSecurity] = useState(!secureTextEntry);
    return (

        <Container>

            {leftIcon && (
                <Icon 
                name={iconName} 
                size={iconSize} color={iconColor ||  theme.COLORS.GRAY2} 
                style={{padding:5 }}/>
            )}

            <InputContainer {...rest}
            underlineColorAndroid={'transparent'}
            secureTextEntry={security}
            placeholderTextColor={theme.COLORS.GRAY3}/>

            {rightIcon && (
                <TouchableOpacity 
                onPress={()=>{
                    setSecurity(!security)
                }}>
                <Icon
                name={security?'eye':'eyeo'} 
                size={iconSize} color={iconColor ||  theme.COLORS.GRAY2} 
                style={{padding:5}}
                ></Icon>
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default Input