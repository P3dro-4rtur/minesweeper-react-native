import React, { useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  action: () => void;
}

export const OptionButton: React.FC<Props> = ({ title, action, ...rest }) => {
  const [isPressed, setIsPressed] = useState(false);

  function toggleIsPressedButton() {
    setIsPressed((actualState) => !actualState);
  }

  function onPressOutAction() {
    toggleIsPressedButton();
    action();
  }

  return (
    <Container
      isActive={isPressed}
      onPressIn={toggleIsPressedButton}
      onPressOut={onPressOutAction}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};
