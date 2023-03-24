import React from "react";
import { useGameSound } from "~/hooks/useGameSound";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonTypes } from "./components/Button";
import { Container, Content, Separator } from "./styles";
import { HeaderDefault as Header } from "~/components/HeaderDefault";
import { Utils } from "~/utils";

interface IButton {
  title: ButtonTypes;
  onPress: () => void;
}

export const Options: React.FC = () => {
  const NavigationHook = useNavigation();
  const GameSoundHook = useGameSound();

  const buttons: IButton[] = [
    {
      title: "sound",
      onPress: () => GameSoundHook.toggleIsMuteModeActive(),
    },
    {
      title: "score",
      onPress: () => NavigationHook.navigate("Score"),
    },
    {
      title: "instructions",
      onPress: () => NavigationHook.navigate("Instructions"),
    },
    {
      title: "about",
      onPress: () => NavigationHook.navigate("About"),
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
    const key = (title: string) => title + Utils.getNewId();

    const list = buttons.map((button: IButton, index: number) => {
      const { title, onPress } = button;

      const ItemSeparator = () => {
        const isNotLastItem = index !== buttons.length - 1;
        if (isNotLastItem) return <Separator />;
        else return null;
      };

      return (
        <React.Fragment key={key(title)}>
          <Button title={title} onPress={onPress} />
          <ItemSeparator />
        </React.Fragment>
      );
    });

    return <React.Fragment>{list}</React.Fragment>;
  }

  return (
    <Container>
      <Header title={"options"} />

      <Content>
        <OptionsList />
      </Content>
    </Container>
  );
};
