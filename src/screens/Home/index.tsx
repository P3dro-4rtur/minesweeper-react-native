import React, { useState, useEffect } from "react";
import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { ThemeUtils } from "~/theme/utils";
import { Container, Title, Options } from "./styles";
import theme from "~/theme";
import { OptionButton } from "~/components/OptionButton";

export function Home() {
  const [labelColor, setLabelColor] = useState<string>(theme.colors.white);
  const GameSoundHook = useGameSound();

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
      <Title color={labelColor}>minesweeper</Title>

      <Options>
        <OptionButton title="start" onPress={undefined} />
        <OptionButton title="options" onPress={undefined} />
      </Options>
    </Container>
  );
}
