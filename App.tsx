import React from "react";
import { StatusBar, StatusBarProps } from "react-native";

import { Routes } from "~/routes";
import { AppProvider } from "~/hooks/provider";

import theme from "~/config/theme";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  ChakraPetch_700Bold,
  ChakraPetch_500Medium,
  ChakraPetch_400Regular,
} from "@expo-google-fonts/chakra-petch";
import {
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
} from "@expo-google-fonts/orbitron";

import { VT323_400Regular } from "@expo-google-fonts/vt323";
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { BungeeInline_400Regular } from "@expo-google-fonts/bungee-inline";

const fonts = {
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,

  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,

  VT323_400Regular,
  PressStart2P_400Regular,
  BungeeInline_400Regular,
};

const statusBarProps: StatusBarProps = {
  translucent: true,
  barStyle: "light-content",
  backgroundColor: theme.colors.black,
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar {...statusBarProps} />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
