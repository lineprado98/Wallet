import React from "react"
import { ButtonSocial, ContainerButton, IconFacebook, Title } from "./styles";
import theme from "@styles/theme";
import PngFacebook from "@assets/images/Icons/facebook.png";
import { ButtonProps, Text, View } from "react-native";
const ButtonSocialFacebook: React.FC<ButtonProps> = ({title, ...rest}) => {

    return (
        <View>
         <ButtonSocial
        onPress={() => { console.log("heelo")}}
      >
             <ContainerButton>
                  <IconFacebook source={PngFacebook} resizeMode="contain"></IconFacebook>   
              <Title>{title}</Title>
            </ContainerButton>
      
     </ButtonSocial>


        </View>
     
    )
}

export { ButtonSocialFacebook }

