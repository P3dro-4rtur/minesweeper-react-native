import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "~/screens/SplashScreen";
import { Home } from "~/screens/Home";
import { Game } from "~/screens/Game";
import { Options } from "~/screens/Options";
import { Score } from "~/screens/Options/Score";
import { Instructions } from "~/screens/Options/Instructions";
import { About } from "~/screens/Options/About";
import { Contact } from "~/screens/Options/Contact";

export interface MinesweeperAppList {
  Home: undefined;
  Game: undefined;
  Options: undefined;
  Score: undefined;
  Instructions: undefined;
  About: undefined;
  Contact: undefined;
}

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
      <Screen name="Score" component={Score} />
      <Screen name="Instructions" component={Instructions} />
      <Screen name="About" component={About} />
      <Screen name="Contact" component={Contact} />
      <Screen name="SplashScreen" component={SplashScreen} />
    </Navigator>
  );
}
