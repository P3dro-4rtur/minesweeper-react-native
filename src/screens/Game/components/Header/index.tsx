import React from "react";
import { Flag } from "~/components/Flag";
import { GameTimer } from "~/components/Timer";
import { ActionsTimer } from "~/components/Timer";
import {
  Container,
  ButtonFlag,
  ButtonFlagLabel,
  ButtonStart,
  ButtonStartLabel,
  AmountFlags,
  Wrapper,
  TimerContainer,
} from "./styles";

interface HeaderProps {
  amountFlags: number;
  actionStart: () => void;
  actionSelectLevel: () => void;
  actionsTimer: ActionsTimer;
}

export function Header(props: HeaderProps) {
  const {
    amountFlags = 0,
    actionStart,
    actionSelectLevel,
    actionsTimer,
  } = props;

  function labelsButton() {
    switch (actionsTimer) {
      case ActionsTimer.start:
        return "RESTART GAME";
      case ActionsTimer.pause:
        return "START NEW GAME";
      case ActionsTimer.stop:
        return "RESTART GAME";

      default:
        return "START NEW GAME";
    }
  }

  return (
    <Container>
      <ButtonFlag onPress={actionSelectLevel}>
        <Wrapper>
          <Flag type="bigger" />
          <ButtonFlagLabel>select level</ButtonFlagLabel>
        </Wrapper>
        <AmountFlags> = {amountFlags}</AmountFlags>
      </ButtonFlag>

      <TimerContainer>
        <GameTimer actionsTimer={actionsTimer} />
      </TimerContainer>

      <ButtonStart onPress={actionStart}>
        <ButtonStartLabel>{labelsButton()}</ButtonStartLabel>
      </ButtonStart>
    </Container>
  );
}
