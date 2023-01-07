LogBox.ignoreAllLogs(true);

import React from "react";
import { StatusBar, StatusBarProps, LogBox } from "react-native";

import { Routes } from "~/routes";
import { AppProvider } from "~/hooks/provider";
import { GameParams } from "~/config/params";
import { LoadAnimated } from "~/components/LoadAnimated";
import { ThemeProvider } from "styled-components/native";
import theme from "~/theme";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [fontsLoaded] = useFonts(fonts);

  function startApp() {
    setTimeout(() => {
      setIsLoading(false);
    }, GameParams.getSecond(2.5));
  }

  React.useEffect(() => {
    startApp();
  }, []);

  if (!fontsLoaded || isLoading) return <LoadAnimated showLabel={true} />;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar {...statusBarProps} />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
