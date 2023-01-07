import React, { useState, useEffect } from "react";
import { GameParams } from "~/config/params";

import theme from "~/theme";
import { ThemeUtils } from "~/theme/utils";

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

  const [loadingLabelColor, setLoadingLabelColor] = useState(initialColor);
  const [ellipsis, setEllipsis] = useState("");

  function startLoad() {
    setInterval(() => {
      infinityRandomColorsLabel();
      ellipsisAnimated();
    }, GameParams.getSecond(0.8));
  }

  function infinityRandomColorsLabel() {
    setLoadingLabelColor(ThemeUtils.randomColor());
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
        <MessageTitle>Dica!</MessageTitle>
        <Message>
          O número de bandeiras disponíveis é o mesmo número de bombas no campo!
        </Message>
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
      {showMessage && <MessageLabel />}
      {showLabel && <LoadLabel />}
      {showSpinner && <Loader />}
    </Container>
  );
};
