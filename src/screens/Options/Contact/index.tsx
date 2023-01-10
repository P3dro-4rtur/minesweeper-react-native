import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

import { Urls } from "~/config/urls";
import { FlagSplash, HeaderDefault } from "@components/index";

import {
  Container,
  Footer,
  FooterButton,
  ButtonTitle,
  ButtonText,
  ContactTitle,
} from "./styles";

export const Contact: React.FC = () => {
  const theme = useTheme();

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
      <StatusBar
        translucent
        style="light"
        backgroundColor={theme.colors.black}
      />
      <HeaderDefault title={"Contact"} />

      <FlagSplash />

      <Footer>
        <ContactTitle>Hyperlinks</ContactTitle>
        <FooterButton onPress={moveForGithub}>
          <ButtonTitle>@Github: </ButtonTitle>
          <ButtonText>P3dro-4rtur</ButtonText>
        </FooterButton>
        <FooterButton onPress={moveForLinkedin}>
          <ButtonTitle>@Linkedin: </ButtonTitle>
          <ButtonText>Pedro Artur Wingert</ButtonText>
        </FooterButton>
      </Footer>
    </Container>
  );
};
