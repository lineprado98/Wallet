import * as React from 'react';
import { Text, View } from 'react-native';

import {Login} from "@screens/Auth/Login";
import {Cadastro} from "@screens/Auth/Cadastro";
import {RecuperarSenha} from "@screens/Auth/RecuperarSenha";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen} = createNativeStackNavigator()

export const AuthRoutes = () => {
    return (
       <Navigator
       initialRouteName='Cadastro'
       screenOptions={{
        headerShown:false
       }}
       >
        <Screen name='Login' component={Login}/>
        <Screen name='Cadastro' component={Cadastro} />
        <Screen name='RecuperaSenha' component={RecuperarSenha}/>

       </Navigator>
    );
};


