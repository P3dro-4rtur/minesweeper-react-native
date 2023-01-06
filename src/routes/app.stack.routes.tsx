import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "~/screens/Home";
import { Game } from "~/screens/Game";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  const navigatorParams = {
    initialRouteName: "Home",
    screenOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  };

  return (
    <Navigator {...navigatorParams}>
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  );
}
