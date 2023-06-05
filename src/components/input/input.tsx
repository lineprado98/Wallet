import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect
} from "react";
import { Text, TextInputProps } from "react-native";
import { useField } from "@unform/core";
import { Container, IContainer, InputText } from "./styles";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {useTheme} from "styled-components"


interface inputRef {
    focus(): void;
}
interface InputValueReference {
    Valuse: string;
}
interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: keyof typeof Ionicons;
    containerStyle?: { [key: string]: string | number }
}

const Input: React.ForwardRefRenderFunction<inputRef, InputProps> = ({
    name,
    value,
    containerStyle,
    ...rest
}) => {
const theme = useTheme();
const [hasError,setHasError] = useState(false);
const [isFocused,setIsFocused] = useState(false);
const [isFilled,setIsFilled] = useState(false);

    return (
        <Container style={containerStyle}>
            <IContainer
            isFilled={isFilled}
            hasError={hasError}
            isFocused={isFocused}
            >
          
            </IContainer>
            <InputText
             isFilled={isFilled}
             hasError={hasError}
             isFocused={isFocused}>
            </InputText>
        </Container>

    )

}

export default Input;
