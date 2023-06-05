import React from "react"
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Content,
    Description,
    Title,
    ViewButton

} from "./styles";
import { Text, SafeAreaView } from "react-native";
import { ButtonSocialGoogle } from "@components/Buttons/ButtonSocial/Google/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "@components/Buttons/ButtonSocial/Facebook/ButtonSocialFacebook";
import Input from "@components/input/input";

const Login: React.FC = () => {

    return (
        <SafeAreaView>
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
                    <Input name="email"/>
                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>

        </SafeAreaView>

    )
}
export { Login }