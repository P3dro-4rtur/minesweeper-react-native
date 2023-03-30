import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import { useTranslation } from "react-i18next";
import Animated from "react-native-reanimated";

import { animatedController } from "./animated";
import { Utils } from "~/utils/utils";
import { GameParams } from "~/config/params";
import { useGameSound } from "~/hooks/useGameSound";
import { useNavigation } from "@react-navigation/native";

import { LoadAnimated, OptionButton } from "@components/index";
import { FlagLabel, FieldLabel } from "./components/index";
import {
  Container,
  Header,
  TitleAnimated,
  Options,
  Row,
  Column,
  DecorationContainer,
} from "./styles";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const GameSoundHook = useGameSound();
  const NavigationHook = useNavigation();
  const { t: translate } = useTranslation();

  const {
    startAnimations,
    buttonStyleAnimated,
    labelContainerStyleAnimated,
    labelTextStyleAnimated,
  } = animatedController();

  function startHome() {
    startAnimations();
    disableHardwareBackButton();
    GameSoundHook.toggleIsMuteModeActive();
  }

  function handlePressStart() {
    const action = () => NavigationHook.navigate("Game");
    const time = GameParams.getSecond(0.6);

    GameSoundHook.stopSound();
    setTimeout(action, time);
  }

  function handlePressOptions() {
    NavigationHook.navigate("Options");
  }

  function disableHardwareBackButton() {
    const button = "hardwareBackPress";
    const callback = () => true;
    const actionReturns = () => {
      return BackHandler.removeEventListener(button, callback);
    };

    BackHandler.addEventListener(button, callback);
    return actionReturns;
  }

  function FieldDecoration(): JSX.Element {
    const totalBlocks = GameParams.getColumnsAmount();
    const arrayColumns = Array(totalBlocks).fill(0);
    const arrayRows = Array(2).fill(0);
    const key = (num: number): string => `${Utils.getNewId()}-${num}`;

    const Component = arrayRows.map((_, indexR) => {
      const Cols = arrayColumns.map((_, indexC) => {
        return <FieldLabel key={key(indexC)} />;
      });
      return <Column key={key(indexR)}>{Cols}</Column>;
    });

    return <Row>{Component}</Row>;
  }

  function controllerLoad() {
    const action = () => setIsLoading(false);
    const time = GameParams.getSecond(2.5);

    setTimeout(action, time);
  }

  function controllerStartHome() {
    if (!isLoading) startHome();
  }

  useEffect(controllerLoad, []);
  useEffect(controllerStartHome, [isLoading]);

  if (isLoading) return <LoadAnimated showLabel showMessage={false} />;

  return (
    <Container>
      <Header>
        <Animated.View style={[labelContainerStyleAnimated]}>
          <TitleAnimated style={[labelTextStyleAnimated]}>
            {translate("screens.home.titleGame")}
          </TitleAnimated>
        </Animated.View>

        <DecorationContainer>
          <FlagLabel />
          <FieldDecoration />
        </DecorationContainer>
      </Header>

      <Animated.View style={[buttonStyleAnimated]}>
        <Options>
          <OptionButton title="start" action={handlePressStart} />
          <OptionButton title="options" action={handlePressOptions} />
        </Options>
      </Animated.View>
    </Container>
  );
};
