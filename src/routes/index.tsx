import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";
import { View as PreventGlitch } from "react-native";
import { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();
  const preventGlitchProps = {
    style: {
      flex: 1,
      backgroundColor: theme.colors.black,
    },
  };

  return (
    <PreventGlitch {...preventGlitchProps}>
      <NavigationContainer>
        <AppStackRoutes />
      </NavigationContainer>
    </PreventGlitch>
  );
}
