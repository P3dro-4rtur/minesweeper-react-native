LogBox.ignoreAllLogs(true);

import React from "react";
import { StatusBar, StatusBarProps, LogBox } from "react-native";

import { AppProvider } from "~/hooks/provider";
import { ThemeProvider } from "styled-components/native";
import theme from "~/theme";
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

const statusBarProps: StatusBarProps = {
  barStyle: "light-content",
  translucent: true,
  backgroundColor: theme.colors.black,
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return <LoadAnimated />;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar {...statusBarProps} />
        <Game />
      </AppProvider>
    </ThemeProvider>
  );
}
