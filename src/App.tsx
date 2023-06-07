import React from "react";
import { StatusBar, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native"
import COLORS from "@styles/theme"
import { styled } from "styled-components";
const STYLES = ['default', 'dark-content', 'light-content'] as const;
import { Login } from "@screens/Login/Login"
const App: React.FC = () => {
    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                barStyle={STYLES[1]}
            />
            <View>
                <Login></Login>
            </View>

        </ThemeProvider >
    )



}
export default App