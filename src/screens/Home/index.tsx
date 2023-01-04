import React, { useState, useEffect } from "react";

import theme from "~/theme";
import { ThemeUtils } from "~/theme/utils";

import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { GameParams } from "~/config/params";

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

  function FieldDecoration() {
    const totalBlocks = GameParams.getColumnsAmount();
    const Component = Array(totalBlocks).fill(<FieldLabel />);
    return <Row>{Component}</Row>;
  }

  function labelColorsRandom() {
    const newColorLabel = () => setLabelColor(ThemeUtils.randomColor());
    setInterval(newColorLabel, 800);
  }

  useEffect(() => {
    labelColorsRandom();
    GameSoundHook.playSound(GameSounds.theme);
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
        <OptionButton title="start" onPress={undefined} />
        <OptionButton title="options" onPress={undefined} />
      </Options>
    </Container>
  );
}
