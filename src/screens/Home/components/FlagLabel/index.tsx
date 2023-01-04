import React from "react";

import {
  Container,
  BaseFirstPart,
  BaseSecondPart,
  FlagBanner,
  FlagPole,
} from "./styles";

export function FlagLabel() {
  return (
    <Container>
      <FlagPole />
      <FlagBanner />
      <BaseFirstPart />
      <BaseSecondPart />
    </Container>
  );
}
