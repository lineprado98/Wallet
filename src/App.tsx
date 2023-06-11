import React from "react";
import { StatusBar, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native"
import COLORS from "@styles/theme"
import { styled } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
const STYLES = ['default', 'dark-content', 'light-content'] as const;
import { Login } from "@screens/Auth/Login/Login"
import { Routes } from "./routes";
const App: React.FC = () => {
    return (
        <ThemeProvider theme={COLORS}>
            <NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                barStyle={STYLES[1]}
            />
               <Routes/>
            </NavigationContainer>
        </ThemeProvider >
    )



}
export default App