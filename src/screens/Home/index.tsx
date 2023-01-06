import React, { useState, useEffect } from "react";

import theme from "~/theme";
import { ThemeUtils } from "~/theme/utils";

import { GameParams } from "~/config/params";
import { useGameSound } from "~/hooks/useGameSound";

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
  }

  function labelColorsRandom() {
    const newColorLabel = () => setLabelColor(ThemeUtils.randomColor());
    setInterval(newColorLabel, GameParams.getSecond(0.8));
  }

  function FieldDecoration(): JSX.Element {
    const totalBlocks = GameParams.getColumnsAmount();
    const Component = Array(totalBlocks).fill(<FieldLabel />);
    return <Row>{Component}</Row>;
  }

  function handlePressStart() {
    const action = () => NavigationHook.navigate("Game");
    GameSoundHook.stopSound();

    setTimeout(action, GameParams.getSecond(0.6));
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
