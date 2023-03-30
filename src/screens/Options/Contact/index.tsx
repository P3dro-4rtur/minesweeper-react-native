import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
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
  const { t: translate } = useTranslation();
  const theme = useTheme();

  const hyperlinks = "Hyperlinks";
  const github = "Github: ";
  const gitName = "P3dro-4rtur";
  const linkedin = "Linkedin: ";
  const linkedinName = "Pedro Artur Wingert";

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
      <HeaderDefault title={translate("screens.contact.header")} />

      <FlagSplash />

      <Footer>
        <ContactTitle>{hyperlinks}</ContactTitle>
        <FooterButton onPress={moveForGithub}>
          <ButtonTitle>{github}</ButtonTitle>
          <ButtonText>{gitName}</ButtonText>
        </FooterButton>
        <FooterButton onPress={moveForLinkedin}>
          <ButtonTitle>{linkedin}</ButtonTitle>
          <ButtonText>{linkedinName}</ButtonText>
        </FooterButton>
      </Footer>
    </Container>
  );
};
