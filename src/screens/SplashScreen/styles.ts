import theme from "~/config/theme/index";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;
  justify-content: space-around;

  background-color: ${theme.colors.black};
`;

export const Footer = styled.View``;
