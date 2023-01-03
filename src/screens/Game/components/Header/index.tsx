import React from "react";
import { Flag } from "~/components/Flag";
import {
  Container,
  ButtonFlag,
  ButtonFlagLabel,
  ButtonStart,
  ButtonStartLabel,
  AmountFlags,
  Wrapper,
} from "./styles";

interface HeaderProps {
  amountFlags: number;
  actionStart: () => void;
  actionSelectLevel: () => void;
}

export function Header(props: HeaderProps) {
  const { amountFlags = 0, actionStart, actionSelectLevel } = props;

  return (
    <Container>
      <ButtonFlag onPress={actionSelectLevel}>
        <Wrapper>
          <Flag type="bigger" />
          <ButtonFlagLabel>select level</ButtonFlagLabel>
        </Wrapper>
        <AmountFlags> = {amountFlags}</AmountFlags>
      </ButtonFlag>

      <ButtonStart onPress={actionStart}>
        <ButtonStartLabel>START NEW GAME</ButtonStartLabel>
      </ButtonStart>
    </Container>
  );
}
