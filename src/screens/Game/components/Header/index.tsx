import React from "react";
import { House } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useGameSound } from "~/hooks/useGameSound";
import { ActionsTimer } from "~/components/Timer";
import { Flag, GameTimer } from "~/components/index";

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
  actionStartButton: () => void;
  actionSelectLevelButton: () => void;
  getTime: (seconds: number) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {
    actionsTimer,
    disableStart,
    amountFlags = 0,
    actionStartButton,
    actionSelectLevelButton,
    getTime,
  } = props;

  const theme = useTheme();
  const GameSoundHook = useGameSound();
  const NavigationHook = useNavigation();
  const { t: translate } = useTranslation();

  function handleNavigateHome() {
    GameSoundHook.stopSound();
    GameSoundHook.playSound();
    NavigationHook.goBack();
  }

  function labelsButton(): string {
    const startLabel = translate("screens.game.header.buttonStart");
    const restartLabel = translate("screens.game.header.buttonRestart");

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
      <ButtonFlag activeOpacity={0.5} onPressOut={actionSelectLevelButton}>
        <WrapperButtonLeft>
          <Flag type={"bigger"} />

          <ButtonFlagLabel>
            {translate("screens.game.header.buttonFlag")}
          </ButtonFlagLabel>
        </WrapperButtonLeft>

        <AmountFlags> = {amountFlags}</AmountFlags>
      </ButtonFlag>

      <TimerContainer>
        <GameTimer actionsTimer={actionsTimer} getTime={getTime} />
      </TimerContainer>

      <WrapperButtonsRight>
        <ButtonHome activeOpacity={0.5} onPressOut={handleNavigateHome}>
          <ButtonHomeLabel>
            {translate("screens.game.header.buttonHome")}
          </ButtonHomeLabel>
          <House weight={"fill"} size={30} color={theme.colors.gray_100} />
        </ButtonHome>

        <ButtonStart
          activeOpacity={0.5}
          disabled={disableStart}
          onPressOut={actionStartButton}
        >
          <ButtonStartLabel colorByDisable={disableStart}>
            {labelsButton()}
          </ButtonStartLabel>
        </ButtonStart>
      </WrapperButtonsRight>
    </Container>
  );
};
