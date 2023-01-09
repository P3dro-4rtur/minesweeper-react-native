import React, { useEffect, useState } from "react";
import { GameParams } from "~/config/params";
import { Container, BackgroundLabel, CountLabel, Wrapper } from "./styles";

export enum ActionsTimer {
  start = "start",
  pause = "pause",
  stop = "stop",
  none = "none",
}

interface TimerProps {
  actionsTimer: ActionsTimer;
  getTime: (seconds: number) => void;
}

const Timer: React.FC<TimerProps> = ({ actionsTimer, getTime }) => {
  const initialSeconds = 0;
  const [secondsAmount, setSecondsAmount] = useState(initialSeconds);

  const seconds = secondsAmount % 60;
  const minutes = Math.floor(secondsAmount / 60);

  function startCount() {
    const action = () => setSecondsAmount((seconds) => seconds + 1);
    setTimeout(action, GameParams.second);
  }

  function sharedSecondsAmount() {
    getTime(secondsAmount);
  }

  function TimerLabel(): JSX.Element | null {
    const secondsLabel = String(seconds).padStart(2, "0");
    const minutesLabel = String(minutes).padStart(2, "0");

    const condition =
      actionsTimer === ActionsTimer.start ||
      actionsTimer === ActionsTimer.pause;

    if (condition) {
      return (
        <Wrapper>
          <CountLabel>{minutesLabel}</CountLabel>
          <CountLabel>{"\b:\b"}</CountLabel>
          <CountLabel>{secondsLabel}</CountLabel>
        </Wrapper>
      );
    }

    return null;
  }

  function TimerBackgroundFixed(): JSX.Element | null {
    const condition = actionsTimer === ActionsTimer.stop || ActionsTimer.none;

    if (condition) {
      return <BackgroundLabel>00 00</BackgroundLabel>;
    }

    return null;
  }

  function actionsController() {
    if (actionsTimer === ActionsTimer.start) {
      startCount();
    }

    if (actionsTimer === ActionsTimer.stop) {
      setSecondsAmount(initialSeconds);
    }

    if (actionsTimer === ActionsTimer.pause) {
      setSecondsAmount((seconds) => seconds);
    }
  }

  useEffect(() => {
    actionsController();
  }, [actionsTimer, secondsAmount]);

  useEffect(() => {
    sharedSecondsAmount();
  }, [secondsAmount]);

  return (
    <Container>
      <TimerBackgroundFixed />
      <TimerLabel />
    </Container>
  );
};

export const GameTimer = Timer;
