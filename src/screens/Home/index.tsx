import React, { useState, useEffect } from "react";

import theme from "~/theme";
import { ThemeUtils } from "~/theme/utils";

import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { GameParams } from "~/config/params";

import { useNavigation } from "@react-navigation/native";

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
    GameSoundHook.playSound(GameSounds.theme);
  }

  function labelColorsRandom() {
    const newColorLabel = () => setLabelColor(ThemeUtils.randomColor());
    setInterval(newColorLabel, 800);
  }

  function FieldDecoration() {
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
    console.log("Options");
    GameSoundHook.toggleMuteMode();
  }

  function handlePressButtonMute() {
    GameSoundHook.toggleMuteMode();
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
        <OptionButton title="options" action={handlePressButtonMute} />
      </Options>
    </Container>
  );
}
