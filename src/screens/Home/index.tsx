import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import theme from "@theme/index";
import { Utils } from "~/utils";
import { GameParams } from "~/config/params";
import { useGameSound } from "~/hooks/useGameSound";
import { useNavigation } from "@react-navigation/native";

import { LoadAnimated, OptionButton } from "@components/index";
import { FlagLabel, FieldLabel } from "./components/index";
import {
  Container,
  Header,
  Title,
  Options,
  Row,
  Column,
  DecorationContainer,
} from "./styles";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [labelColor, setLabelColor] = useState<string>(theme.colors.white);
  const GameSoundHook = useGameSound();
  const NavigationHook = useNavigation();

  /* Animated Config */
  const labelOpacity = useSharedValue(0);
  const buttonsPosition = useSharedValue(500);

  const labelStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        labelOpacity.value,
        [0, 25, 50, 75, 100],
        [0, 0, 0.1, 0.3, 1],
        Extrapolate.EXTEND
      ),
    };
  });

  const buttonStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: buttonsPosition.value }],
    };
  });

  function startAnimations() {
    labelOpacity.value = withTiming(100, {
      duration: GameParams.getSecond(9),
    });

    buttonsPosition.value = withTiming(0, {
      duration: GameParams.getSecond(11),
    });
  }

  /* General */
  function startHome() {
    startAnimations();
    startLabelColorsRandom();
    disableHardwareBackButton();
    GameSoundHook.toggleIsMuteModeActive();
  }

  function startLabelColorsRandom() {
    const newColorLabel = () => setLabelColor(Utils.randomColor());
    const interval = GameParams.getSecond(0.7);
    const timeout = GameParams.getSecond(10);

    setTimeout(() => setInterval(newColorLabel, interval), timeout);
  }

  function FieldDecoration(): JSX.Element {
    const totalBlocks = GameParams.getColumnsAmount();
    const arrayColumns = Array(totalBlocks).fill(0);
    const arrayRows = Array(2).fill(0);

    const Component = arrayRows.map((_, indexR) => {
      const Cols = arrayColumns.map((_, indexC) => {
        return <FieldLabel key={String(indexC + indexR)} />;
      });
      return <Column>{Cols}</Column>;
    });

    return <Row>{Component}</Row>;
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

  useEffect(() => {
    function controllerLoad() {
      const action = () => setIsLoading(false);
      const time = GameParams.getSecond(2.5);

      setTimeout(action, time);
    }

    controllerLoad();
  }, []);

  useEffect(() => {
    function controllerStartHome() {
      if (!isLoading) startHome();
    }

    controllerStartHome();
  }, [isLoading]);

  if (isLoading) return <LoadAnimated showLabel showMessage={false} />;

  return (
    <Container>
      <Header>
        <Animated.View style={[labelStyleAnimated]}>
          <Title color={labelColor}>minesweeper</Title>
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
