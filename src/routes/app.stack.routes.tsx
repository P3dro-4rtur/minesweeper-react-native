import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "~/screens/Home";
import { Game } from "~/screens/Game";
import { Options } from "~/screens/Options";
import { SplashScreen as ContactPage } from "~/screens/SplashScreen";

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
      <Screen name="Options" component={Options} />
      <Screen name="Contact" component={ContactPage} />
    </Navigator>
  );
}
