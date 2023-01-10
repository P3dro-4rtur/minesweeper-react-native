import React from "react";
import {
  Screen,
  Container,
  BaseFirstPart,
  BaseSecondPart,
  FlagBanner,
  FlagPole,
} from "./styles";

interface Props {
  size?: number;
}

export const FlagSplash: React.FC<Props> = ({ size = 7 }) => {
  return (
    <Screen>
      <Container>
        <FlagPole size={size} />
        <FlagBanner size={size} />
        <BaseFirstPart size={size} />
        <BaseSecondPart size={size} />
      </Container>
    </Screen>
  );
};
