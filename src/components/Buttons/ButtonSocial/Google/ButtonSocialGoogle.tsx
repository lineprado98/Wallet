import React from "react"
import { ButtonSocial, ContainerButton, IconGoogle, Title } from "./styles";
import theme from "@styles/theme";
import PngGoogle from "@assets/images/Icons/google.png";
import { ButtonProps, Text, View } from "react-native";
const ButtonSocialGoogle: React.FC<ButtonProps> = ({title, ...rest}) => {

    return (
        <View>
         <ButtonSocial
        onPress={() => { console.log("heelo")}}
      >
             <ContainerButton>
                  <IconGoogle source={PngGoogle} resizeMode="contain"></IconGoogle>   
              <Title>{title}</Title>
            </ContainerButton>
      
     </ButtonSocial>


        </View>
     
    )
}

export { ButtonSocialGoogle }

