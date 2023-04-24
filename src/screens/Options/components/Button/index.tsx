import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacityProps } from "react-native";
import { useGameSound } from "~/hooks/useGameSound";
import { Container, Title } from "./styles";

export type ButtonTypes =
  | "sound"
  | "score"
  | "contact"
  | "instructions"
  | "about";

interface ButtonProps extends TouchableOpacityProps {
  title: ButtonTypes;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
  const GameSoundHook = useGameSound();
  const { t: translate } = useTranslation();

  function soundLabel() {
    if (title === "sound") {
      if (GameSoundHook.muteModeIsActive) {
        return ": " + translate("screens.options.muted");
      }

      if (!GameSoundHook.muteModeIsActive) {
        return ": " + translate("screens.options.notMuted");
      }
    }

    return "";
  }

  function togglePressed() {
    setIsPressed((actualState) => !actualState);
  }

  return (
    <Container
      activeOpacity={1}
      isActive={isPressed}
      onPressIn={togglePressed}
      onPressOut={() => [onPress(), togglePressed()]}
    >
      <Title>
        {title}
        {soundLabel()}
      </Title>
    </Container>
  );
};
