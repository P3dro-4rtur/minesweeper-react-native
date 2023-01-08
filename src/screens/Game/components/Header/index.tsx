import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useGameSound } from "~/hooks/useGameSound";
import { House } from "phosphor-react-native";
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
  ButtonHome,
  ButtonHomeLabel,
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

  const theme = useTheme();
  const GameSoundHook = useGameSound();
  const NavigationHook = useNavigation();

  function handleNavigateHome() {
    GameSoundHook.stopSound();
    GameSoundHook.playSound();
    NavigationHook.goBack();
  }

  function labelsButton() {
    const startLabel = "start new game";
    const restartLabel = "restart game";

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
      <ButtonFlag activeOpacity={0.5} onPressOut={actionSelectLevel}>
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

      <ButtonHome activeOpacity={0.5} onPressOut={() => handleNavigateHome()}>
        <ButtonHomeLabel>home</ButtonHomeLabel>
        <House weight="fill" size={30} color={theme.colors.gray_100} />
      </ButtonHome>

      <ButtonStart activeOpacity={0.5} onPressOut={actionStart}>
        <ButtonStartLabel>{labelsButton()}</ButtonStartLabel>
      </ButtonStart>
    </Container>
  );
}
