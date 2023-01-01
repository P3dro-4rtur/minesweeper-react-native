import React from "react";

import {
  Container,
  FlagPole,
  FlagBanner,
  BaseFirstPart,
  BaseSecondPart,
} from "./styles";

interface Props {
  type?: "regular" | "bigger";
}

export function Flag({ type = "regular" }: Props) {
  return (
    <Container>
      <FlagPole type={type} />
      <FlagBanner type={type} />
      <BaseFirstPart type={type} />
      <BaseSecondPart type={type} />
    </Container>
  );
}
