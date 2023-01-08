import React, { useState, useEffect } from "react";
import { GameParams } from "~/config/params";
import { Message as IMessage, messages } from "~/config/messages";

import theme from "~/theme";
import { Utils } from "~/utils";

import {
  Container,
  Loader,
  LoadingLabel,
  MessageContainer,
  MessageTitle,
  Message,
} from "./styles";

interface LoaderProps {
  showLabel?: boolean;
  showSpinner?: boolean;
  showMessage?: boolean;
}

export const LoadAnimated: React.FC<LoaderProps> = (props) => {
  const { showMessage = true, showLabel, showSpinner } = props;
  const initialColor = theme.colors.white;
  const initialMessage = {} as IMessage;

  const [ellipsis, setEllipsis] = useState("");
  const [randomShowMessage, setRandomShowMessage] = useState(false);
  const [loadingLabelColor, setLoadingLabelColor] = useState(initialColor);
  const [messageSelected, setMessageSelected] =
    useState<IMessage>(initialMessage);

  function startLoad() {
    const randomShow = Boolean(Math.round(Math.random()));
    const num = Utils.randomNumber(0, messages.length);
    const message = messages[num];

    setRandomShowMessage(randomShow);
    setMessageSelected(message);

    setInterval(() => {
      infinityRandomColorsLabel();
      ellipsisAnimated();
    }, GameParams.getSecond(0.6));
  }

  function infinityRandomColorsLabel() {
    setLoadingLabelColor(Utils.randomColor());
  }

  function ellipsisAnimated() {
    setEllipsis((actualState) => actualState.concat("."));
  }

  function controllerEllipsisLength() {
    if (ellipsis.length > 3) {
      setEllipsis("");
    }
  }

  function MessageLabel(): JSX.Element {
    return (
      <MessageContainer>
        <MessageTitle colorByType={messageSelected.type}>
          {messageSelected.title}:
        </MessageTitle>
        <Message>{messageSelected.message}</Message>
      </MessageContainer>
    );
  }

  function LoadLabel(): JSX.Element {
    return (
      <LoadingLabel color={loadingLabelColor}>{ellipsis}loading</LoadingLabel>
    );
  }

  useEffect(() => startLoad(), []);
  useEffect(() => controllerEllipsisLength(), [ellipsis]);

  return (
    <Container>
      {showMessage && randomShowMessage && <MessageLabel />}
      {showLabel && <LoadLabel />}
      {showSpinner && <Loader />}
    </Container>
  );
};
