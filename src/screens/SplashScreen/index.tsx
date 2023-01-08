import React from "react";
import * as Linking from "expo-linking";

import { FlagSplash } from "./FlagSplash";
import {
  Container,
  Footer,
  FooterButton,
  ButtonTitle,
  ButtonText,
  ContactTitle,
} from "./styles";

interface Props {
  showContact?: boolean;
}

export function SplashScreen({ showContact = true }: Props) {
  function moveForGithub() {
    const github = "https://github.com/P3dro-4rtur";
    Linking.openURL(github);
  }

  function moveForLinkedin() {
    const linkedin =
      "https://www.linkedin.com/in/pedro-artur-wingert-a34719100/";
    Linking.openURL(linkedin);
  }
  return (
    <Container>
      <FlagSplash />

      <Footer>
        {showContact && (
          <React.Fragment>
            <ContactTitle>Hyperlinks</ContactTitle>
            <FooterButton onPress={moveForGithub}>
              <ButtonTitle>@Github: </ButtonTitle>
              <ButtonText>P3dro-4rtur/</ButtonText>
            </FooterButton>
            <FooterButton onPress={moveForLinkedin}>
              <ButtonTitle>@Linkedin: </ButtonTitle>
              <ButtonText>Pedro Artur Wingert/</ButtonText>
            </FooterButton>
          </React.Fragment>
        )}
      </Footer>
    </Container>
  );
}
