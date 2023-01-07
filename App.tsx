LogBox.ignoreAllLogs(true);

import React, { useState, useEffect } from "react";
import { StatusBar, StatusBarProps, LogBox } from "react-native";

import { Routes } from "~/routes";
import { AppProvider } from "~/hooks/provider";
import { GameParams } from "~/config/params";

import { SplashScreen } from "~/screens/SplashScreen";

import theme from "~/theme";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,
} from "@expo-google-fonts/chakra-petch";

import {
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
} from "@expo-google-fonts/orbitron";

const fonts = {
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
};

const statusBarProps: StatusBarProps = {
  barStyle: "light-content",
  translucent: true,
  backgroundColor: theme.colors.black,
};

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppLoaded(true), GameParams.getSecond(5));
  }, []);

  if (!fontsLoaded || !appLoaded) return <SplashScreen />;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar {...statusBarProps} />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
