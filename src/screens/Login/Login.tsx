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
import Input from "@components/input";
import theme from "@styles/theme";
import Button from "@components/Buttons/Button";
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

                {/* <ContentBody> */}
                    <Input
                        placeholder="Digite seu E-mail"
                        leftIcon
                        iconSize={20}
                        iconName="mail"
                        iconColor={theme.COLORS.TEXTDARK}

                    ></Input>
                    <Input
                    placeholder="Digite sua senha"
                        leftIcon
                        iconName="lock1"
                        iconSize={20}

                                           ></Input>

                {/* </ContentBody> */}

                <ContentFooter>
                    <Button 
                    variant="primary"
                    title="Entrar"
                    onPress={()=>{}}
              
                    ></Button>

                </ContentFooter>

            </Container>

        </SafeAreaView>

    )
}
export { Login }