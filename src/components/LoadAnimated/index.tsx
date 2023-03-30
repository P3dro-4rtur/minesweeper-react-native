import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GameParams } from "~/config/params";
import { Message as IMessage, GameMessages } from "~/config/messages";

import theme from "~/config/theme";
import { Utils } from "~/utils/utils";

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
  const { t: translate } = useTranslation();
  const { messages } = GameMessages();
  const { colors } = theme;

  const [ellipsis, setEllipsis] = useState<string>("");
  const [randomShowMessage, setRandomShowMessage] = useState(false);
  const [loadingLabelColor, setLoadingLabelColor] = useState(colors.white);
  const [messageSelected, setMessageSelected] = useState<IMessage>(
    {} as IMessage
  );

  function startLoad() {
    const randomShow = Boolean(Math.round(Math.random()));
    const num = Utils.randomNumber(0, messages.length);
    const message = messages[num];

    const initLoadAnimation = () => {
      randomColorsLabel();
      ellipsisAnimated();
    };

    setRandomShowMessage(randomShow);
    setMessageSelected(message);
    setInterval(initLoadAnimation, GameParams.getSecond(0.8));
  }

  function randomColorsLabel() {
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
          {messageSelected.title}
        </MessageTitle>
        <Message>{messageSelected.message}</Message>
      </MessageContainer>
    );
  }

  function LoadLabel(): JSX.Element {
    return (
      <LoadingLabel color={loadingLabelColor}>
        {ellipsis}
        {translate("components.loadAnimated.label")}
      </LoadingLabel>
    );
  }

  useEffect(startLoad, []);
  useEffect(controllerEllipsisLength, [ellipsis]);

  return (
    <Container>
      {showMessage && randomShowMessage && <MessageLabel />}
      {showLabel && <LoadLabel />}
      {showSpinner && <Loader />}
    </Container>
  );
};
