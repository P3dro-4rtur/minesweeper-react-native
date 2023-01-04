import React, { useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  action: () => void;
}

export function OptionButton({ title, action, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  function toggleIsPressedButton() {
    setIsPressed((actualState) => !actualState);
  }

  return (
    <Container
      isActive={isPressed}
      onPressIn={toggleIsPressedButton}
      onPressOut={() => [toggleIsPressedButton(), action()]}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
