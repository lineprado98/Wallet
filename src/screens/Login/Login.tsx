import React from "react"
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
import { KeyboardAvoidingView } from "react-native";
import { ButtonSocialGoogle } from "@components/Buttons/ButtonSocial/Google/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "@components/Buttons/ButtonSocial/Facebook/ButtonSocialFacebook";
import Input from "@components/input";
import theme from "@styles/theme";
import Button from "@components/Buttons/Button";
const Login: React.FC = () => {

    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled>

            <Container>
                <ContentHeader>
                    <Title>
                        Seja bem vindo(a) {"\n"}a Wallet App
                    </Title>
                    <Description>
                        Entrar com redes sociais

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
                        placeholder="Digite seu E-mail"
                        leftIcon
                        autoCorrect={false}
                        keyboardType="email-address"
                        iconSize={20}
                        iconName="mail"


                    ></Input>
                    <Input
                        autoCapitalize="none"
                        placeholder="Digite sua senha"
                        leftIcon
                        rightIcon
                        autoCorrect={false}
                        keyboardType="default"
                        iconName="lock1"
                        iconSize={20}
                    ></Input>

                </ContentBody>
                <ContentButtonForgotPassword onPress={() => { }}>

                    <ContentForgotPassword>
                        <ContentTtileForgotPassword>Recuperar Senha</ContentTtileForgotPassword>
                    </ContentForgotPassword>
                </ContentButtonForgotPassword>
                {/* <Button
                        variant="transparent"
                        title="Recuperar Senha"
                        onPress={() => { }}

                    ></Button> */}

                <Button
                    variant="primary"
                    title="Entrar"
                    onPress={() => { }}

                ></Button>
                <ButtonSignUp onPress={() => { }}>
                    <TitleButtonSignUp>Não tem cadastro ainda?</TitleButtonSignUp>
                    <TitleButtonSignUp1>Cadastre-se</TitleButtonSignUp1>

                </ButtonSignUp>

                <ContentFooter>


                </ContentFooter>

            </Container>

        </KeyboardAvoidingView>

    )
}
export { Login }