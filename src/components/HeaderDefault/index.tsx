import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Header, TitleHeader, BackButton, BackArrow } from "./styles";

interface Props {
  title: string;
}

export const HeaderDefault: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const NavigationHook = useNavigation();

  function handleBackToHomePage() {
    NavigationHook.goBack();
  }

  return (
    <Header>
      <BackButton onPress={handleBackToHomePage}>
        <BackArrow size={25} weight={"fill"} color={theme.colors.gray_100} />
      </BackButton>
      <TitleHeader>{title}</TitleHeader>
    </Header>
  );
};
