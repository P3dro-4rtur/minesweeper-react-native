import React from "react";
import { useTheme } from "styled-components/native";
import { useGameSound } from "~/hooks/useGameSound";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonTypes } from "./components/Button";
import {
  Container,
  Header,
  TitleHeader,
  BackButton,
  BackArrow,
  Content,
  Separator,
} from "./styles";

interface IButton {
  title: ButtonTypes;
  onPress: () => void;
}

export function Options() {
  const theme = useTheme();
  const NavigationHook = useNavigation();
  const GameSoundHook = useGameSound();

  const buttons: IButton[] = [
    {
      title: "sound",
      onPress: () => GameSoundHook.toggleIsMuteModeActive(),
    },
    {
      title: "score",
      onPress: () => undefined,
    },
    {
      title: "instructions",
      onPress: () => undefined,
    },
    {
      title: "about",
      onPress: () => undefined,
    },
    {
      title: "contact",
      onPress: () => NavigationHook.navigate("Contact"),
    },
  ];

  function handleBackToHomePage() {
    NavigationHook.goBack();
  }

  function OptionsList(): JSX.Element {
    const list = buttons.map(({ title, onPress }: IButton, index: number) => {
      return (
        <React.Fragment>
          <Button title={title} onPress={onPress} />
          {index !== buttons.length - 1 && <Separator />}
        </React.Fragment>
      );
    });

    return <React.Fragment>{list}</React.Fragment>;
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBackToHomePage}>
          <BackArrow size={25} weight={"fill"} color={theme.colors.gray_100} />
        </BackButton>
        <TitleHeader>options</TitleHeader>
      </Header>

      <Content>
        <OptionsList />
      </Content>
    </Container>
  );
}
