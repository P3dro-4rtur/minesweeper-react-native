import React from "react";
import { StatusBar } from "react-native";

import theme from "~/theme";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,
} from "@expo-google-fonts/chakra-petch";

import { Game } from "./src/screens/Game";
import { LoadAnimated } from "~/components/LoadAnimated";

const fonts = {
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return <LoadAnimated />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.black}
      />
      <Game />
    </ThemeProvider>
  );
}
