import React from "react";

import {
  Container,
  BaseFirstPart,
  BaseSecondPart,
  FlagBanner,
  FlagPole,
} from "./styles";

export const FlagLabel: React.FC = () => {
  return (
    <Container>
      <FlagPole />
      <FlagBanner />
      <BaseFirstPart />
      <BaseSecondPart />
    </Container>
  );
};
