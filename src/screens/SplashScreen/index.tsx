import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";

import { Urls } from "~/config/urls";
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
    const github = Urls.contacts.github;
    Linking.openURL(github);
  }

  function moveForLinkedin() {
    const linkedin = Urls.contacts.linkedin;
    Linking.openURL(linkedin);
  }
  return (
    <Container>
      <StatusBar hidden />
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
