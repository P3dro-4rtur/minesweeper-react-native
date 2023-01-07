import React from "react";
import {
  Screen,
  Container,
  BaseFirstPart,
  BaseSecondPart,
  FlagBanner,
  FlagPole,
} from "./styles";

export function FlagSplash() {
  return (
    <Screen>
      <Container>
        <FlagPole />
        <FlagBanner />
        <BaseFirstPart />
        <BaseSecondPart />
      </Container>
    </Screen>
  );
}
