import React from 'react';
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Content,
    Description,
    Title,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp,
    TitleButtonSignUp1,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTtileForgotPassword

} from "./styles";
import { KeyboardAvoidingView,ScrollView } from "react-native";
import { ButtonSocialGoogle } from "@components/Buttons/ButtonSocial/Google/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "@components/Buttons/ButtonSocial/Facebook/ButtonSocialFacebook";
import Input from "@components/input";
import theme from "@styles/theme";
import Button from "@components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { Login } from '../Login';
export const Cadastro = () => {

    const navigation = useNavigation();

    return (


        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentHeader>
                    <Title>
                        Seja bem vindo(a) {"\n"}a Wallet App Cadastro
                    </Title>
                    <Description>
                Cadastre-se com
                    </Description>

                </ContentHeader>

                <ViewButton>
                    <ButtonSocialGoogle
                        title="Google"
                    ></ButtonSocialGoogle>
                    <ButtonSocialFacebook
                        title="Facebook"
                    ></ButtonSocialFacebook>

                </ViewButton>

                <ContentBody>
                    <Input
                        autoCapitalize="none"
                        placeholder="Digite seu nome"
                        leftIcon
                        keyboardType="default"
                        autoCorrect={false}
                        iconSize={20}
                        iconName="user" />

                    <Input
                        autoCapitalize="none"
                        placeholder="Digite seu E-mail"
                        leftIcon
                        autoCorrect={false}
                        keyboardType="email-address"
                        iconSize={20}
                        iconName="mail" />

                    <Input
                        autoCapitalize="none"
                        placeholder="Digite sua senha"
                        leftIcon
                        rightIcon
                        autoCorrect={false}
                        keyboardType="default"
                        iconName="lock1"
                        iconSize={20}
                    />

                </ContentBody>
                <ContentButtonForgotPassword onPress={() => { }}>

                </ContentButtonForgotPassword>
                {/* <Button
                        variant="transparent"
                        title="Recuperar Senha"
                        onPress={() => { }}

                    ></Button> */}

                <Button
                    variant="primary"
                    title="Registre-se"
                    onPress={() => { }}

                ></Button>
                <ButtonSignUp onPress={() => { navigation.navigate('Login') }}>
                    <TitleButtonSignUp>Ja tem cadastro?</TitleButtonSignUp>
                    <TitleButtonSignUp1>Logar-se</TitleButtonSignUp1>

                </ButtonSignUp>

                <ContentFooter>


                </ContentFooter>
            </ScrollView>
        </Container>
    )
}