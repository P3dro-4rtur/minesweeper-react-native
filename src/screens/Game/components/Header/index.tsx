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
  WrapperButtonLeft,
  WrapperButtonsRight,
  TimerContainer,
  ButtonHome,
  ButtonHomeLabel,
} from "./styles";

interface HeaderProps {
  amountFlags: number;
  disableStart: boolean;
  actionsTimer: ActionsTimer;
  actionStart: () => void;
  actionSelectLevel: () => void;
  getTime: (seconds: number) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {
    actionsTimer,
    disableStart,
    amountFlags = 0,
    actionStart,
    actionSelectLevel,
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
    const startLabel = "start game";
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
        <WrapperButtonLeft>
          <Flag type={"bigger"} />
          <ButtonFlagLabel>select level</ButtonFlagLabel>
        </WrapperButtonLeft>
        <AmountFlags> = {amountFlags}</AmountFlags>
      </ButtonFlag>

      <TimerContainer>
        <GameTimer
          actionsTimer={actionsTimer}
          getTime={(seconds) => getTime(seconds)}
        />
      </TimerContainer>

      <WrapperButtonsRight>
        <ButtonHome activeOpacity={0.5} onPressOut={() => handleNavigateHome()}>
          <ButtonHomeLabel>home</ButtonHomeLabel>
          <House weight={"fill"} size={30} color={theme.colors.gray_100} />
        </ButtonHome>

        <ButtonStart
          disabled={disableStart}
          activeOpacity={0.5}
          onPressOut={actionStart}
        >
          <ButtonStartLabel colorByDisable={disableStart}>
            {labelsButton()}
          </ButtonStartLabel>
        </ButtonStart>
      </WrapperButtonsRight>
    </Container>
  );
};
