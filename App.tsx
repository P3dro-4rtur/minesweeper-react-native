LogBox.ignoreAllLogs(true);

import React from "react";
import { StatusBar, StatusBarProps, LogBox } from "react-native";

import { Routes } from "~/routes";
import { AppProvider } from "~/hooks/provider";
import { LoadAnimated } from "~/components/LoadAnimated";
import { ThemeProvider } from "styled-components/native";
import theme from "~/theme";
import {
  useFonts,
  ChakraPetch_400Regular,
  ChakraPetch_500Medium,
  ChakraPetch_700Bold,
} from "@expo-google-fonts/chakra-petch";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [fontsLoaded] = useFonts(fonts);

  function startApp() {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }

  React.useEffect(() => {
    startApp();
  }, []);

  if (!fontsLoaded || isLoading) return <LoadAnimated />;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar {...statusBarProps} />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
