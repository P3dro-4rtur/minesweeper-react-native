import React from "react";

import {
  Container,
  FlagPole,
  FlagBanner,
  BaseFirstPart,
  BaseSecondPart,
} from "./styles";

interface FlagProps {
  type?: "regular" | "bigger";
}

export const Flag: React.FC<FlagProps> = ({ type = "regular" }) => {
  return (
    <Container>
      <FlagPole type={type} />
      <FlagBanner type={type} />
      <BaseFirstPart type={type} />
      <BaseSecondPart type={type} />
    </Container>
  );
};
