import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  interpolate,
  interpolateColor,
  Extrapolate,
} from "react-native-reanimated";

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

  /**
   * Animated Config
   */
  const labelColors = useSharedValue(0);
  const labelOpacity = useSharedValue(0);
  const buttonsPosition = useSharedValue(500);

  const labelContainerStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        labelOpacity.value,
        [0, 25, 50, 75, 100],
        [0, 0, 0.1, 0.3, 1],
        Extrapolate.EXTEND
      ),
    };
  });

  const labelTextStyleAnimated = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        labelColors.value,
        [0, 50, 100],
        ["red", "blue", "green"]
      ),
      borderBottomColor: interpolateColor(
        labelColors.value,
        [0, 50, 100],
        ["red", "blue", "green"]
      ),
    };
  });

  const buttonStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: buttonsPosition.value }],
    };
  });

  function startAnimations() {
    const time = (seconds: number) => GameParams.getSecond(seconds);
    const labelColorsTiming = Utils.createTimingAnimated(time(0.1), time(3.5));
    const amountLoops = -1;
    const isReverse = true;

    labelColors.value = withRepeat(labelColorsTiming, amountLoops, isReverse);
    labelOpacity.value = Utils.createTimingAnimated(time(0.1), time(10));
    buttonsPosition.value = Utils.createTimingAnimated(time(0.1), time(12));
  }

  /**
   * General
   */
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
            minesweeper
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
