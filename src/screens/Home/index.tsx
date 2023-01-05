import React, { useState, useEffect } from "react";

import theme from "~/theme";
import { ThemeUtils } from "~/theme/utils";

import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { GameParams } from "~/config/params";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { FlagLabel } from "./components/FlagLabel";
import { FieldLabel } from "./components/FieldLabel";
import { OptionButton } from "~/components/OptionButton";

import {
  Container,
  Header,
  Title,
  Options,
  Row,
  DecorationContainer,
} from "./styles";

export function Home() {
  const [labelColor, setLabelColor] = useState<string>(theme.colors.white);
  const GameSoundHook = useGameSound();
  const NavigationHook = useNavigation();

  function startHome() {
    labelColorsRandom();
  }

  function labelColorsRandom() {
    const newColorLabel = () => setLabelColor(ThemeUtils.randomColor());
    setInterval(newColorLabel, 800);
  }

  function FieldDecoration(): JSX.Element {
    const totalBlocks = GameParams.getColumnsAmount();
    const Component = Array(totalBlocks).fill(<FieldLabel />);
    return <Row>{Component}</Row>;
  }

  function handlePressStart() {
    GameSoundHook.stopSound();

    setTimeout(() => {
      NavigationHook.navigate("Game");
    }, 600);
  }

  function handlePressOptions() {
    handlePressButtonMute();
  }

  function handlePressButtonMute() {
    GameSoundHook.toggleIsMuteModeActive();
  }

  useEffect(() => {
    startHome();
  }, []);

  return (
    <Container>
      <Header>
        <Title color={labelColor}>minesweeper</Title>
        <DecorationContainer>
          <FlagLabel />
          <FieldDecoration />
          <FieldDecoration />
        </DecorationContainer>
      </Header>

      <Options>
        <OptionButton title="start" action={handlePressStart} />
        <OptionButton title="options" action={handlePressOptions} />
      </Options>
    </Container>
  );
}
