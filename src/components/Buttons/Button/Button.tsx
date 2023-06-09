import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

import { variants } from "./Variante";
import { ViewStyle } from "react-native";
import { Content } from "@screens/Login/styles";
import theme from "@styles/theme";
interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof Icon.getRawGlyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | "black"| "transparent";
    style?: ViewStyle;


}
export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = "primary",
    style

}) => {
    const ButtonVariant = variants[variant]
    const buttonStyle = disabled ? ButtonVariant.disabled : ButtonVariant.enabled;
    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}>
            {isLoading ? (
                <ActivityIndicator color={theme.COLORS.GRAY} />

            ) : (
                <Content>
                    {iconName && (
                        <Icon
                         name={iconName} 
                         size={20} 
                         color={buttonStyle.icon.color}
                         style= {{marginRight:15}}/>
                    )}
                    <Title>{title}</Title>

                </Content>
            )}

        </Container>
    )
}


export default Button