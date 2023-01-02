import React from "react";
import { Flag } from "~/components/Flag";
import {
  Container,
  ButtonFlag,
  ButtonFlagLabel,
  ButtonStart,
  ButtonStartLabel,
} from "./styles";

interface HeaderProps {
  actionStart: () => void;
  actionSelectLevel: () => void;
}

export function Header({ actionStart, actionSelectLevel }: HeaderProps) {
  return (
    <Container>
      <ButtonFlag onPress={actionSelectLevel}>
        <Flag type="bigger" />
        <ButtonFlagLabel>select level</ButtonFlagLabel>
      </ButtonFlag>

      <ButtonStart onPress={actionStart}>
        <ButtonStartLabel>START NEW GAME</ButtonStartLabel>
      </ButtonStart>
    </Container>
  );
}
