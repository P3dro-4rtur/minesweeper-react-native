import React from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { FlagSplash } from "@components/FlagSplash/index";
import { Container, Footer } from "./styles";

export const SplashScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        translucent
        style="light"
        backgroundColor={theme.colors.black}
      />

      <FlagSplash />

      <Footer />
    </Container>
  );
};
