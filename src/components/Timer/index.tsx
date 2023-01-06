import React, { useEffect, useState } from "react";
import { Container, BackgroundLabel, CountLabel } from "./styles";

export enum ActionsTimer {
  start = "start",
  pause = "pause",
  stop = "stop",
}

interface TimerProps {
  actionsTimer: ActionsTimer;
}

function Timer({ actionsTimer }: TimerProps) {
  const [secondsAmount, setSecondsAmount] = useState(0);
  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  console.log(secondsAmount);

  function startCount() {
    setTimeout(() => {
      setSecondsAmount((seconds) => seconds + 1);
    }, 1000);
  }

  function TimerLabel(): JSX.Element | null {
    const secondsLabel = String(seconds).padStart(2, "0");
    const minutesLabel = String(minutes).padStart(2, "0");
    const Label = `\b\b\b\b${minutesLabel}\b:\b${secondsLabel}`;

    if (
      actionsTimer === ActionsTimer.start ||
      actionsTimer === ActionsTimer.pause
    ) {
      return <CountLabel>{Label}</CountLabel>;
    }

    return null;
  }

  useEffect(() => {
    if (actionsTimer === ActionsTimer.start) startCount();
    if (actionsTimer === ActionsTimer.stop) setSecondsAmount(0);
  }, [actionsTimer, secondsAmount]);

  return (
    <Container>
      <BackgroundLabel>00 00</BackgroundLabel>
      <TimerLabel />
    </Container>
  );
}

export const GameTimer = Timer;
