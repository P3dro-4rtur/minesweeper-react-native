import React, { useEffect, useState } from "react";
import { Container, BackgroundLabel, CountLabel, Wrapper } from "./styles";

export enum ActionsTimer {
  start = "start",
  pause = "pause",
  stop = "stop",
}

interface TimerProps {
  actionsTimer: ActionsTimer;
}

function Timer({ actionsTimer }: TimerProps) {
  const initialSeconds = 0;

  const [secondsAmount, setSecondsAmount] = useState(initialSeconds);
  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  console.log("secondsAmount =>", secondsAmount);
  console.log("minutes =>", minutes);
  console.log("seconds =>", seconds);

  function startCount() {
    setTimeout(() => {
      setSecondsAmount((seconds) => seconds + 1);
    }, 1000);
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
    if (actionsTimer === ActionsTimer.stop) {
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

  return (
    <Container>
      <TimerBackgroundFixed />
      <TimerLabel />
    </Container>
  );
}

export const GameTimer = Timer;
