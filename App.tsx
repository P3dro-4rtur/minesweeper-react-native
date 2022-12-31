import React from "react";
import { StatusBar } from "expo-status-bar";

import { Game } from "./src/screens/Game";

import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Game />
    </ThemeProvider>
  );
}
