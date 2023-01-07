import React from "react";
import { Flag, GameTimer } from "~/components/index";
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
  getTime: (seconds: number) => void;
}

export function Header(props: HeaderProps) {
  const {
    amountFlags = 0,
    actionStart,
    actionSelectLevel,
    actionsTimer,
    getTime,
  } = props;

  function labelsButton() {
    const startLabel = "START NEW GAME";
    const restartLabel = "RESTART GAME";

    switch (actionsTimer) {
      case ActionsTimer.none:
        return startLabel;

      case ActionsTimer.start:
        return restartLabel;

      case ActionsTimer.pause:
        return startLabel;

      case ActionsTimer.stop:
        return restartLabel;

      default:
        return startLabel;
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
        <GameTimer
          actionsTimer={actionsTimer}
          getTime={(seconds) => getTime(seconds)}
        />
      </TimerContainer>

      <ButtonStart onPressOut={actionStart}>
        <ButtonStartLabel>{labelsButton()}</ButtonStartLabel>
      </ButtonStart>
    </Container>
  );
}
