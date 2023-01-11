import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: ${RFValue(0)}px ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(50)}px;
`;

export const Separator = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.gray_400, theme.colors.white, theme.colors.gray_400],
  start: { x: 0.15, y: 0.5 },
  end: { x: 0.95, y: 0.5 },
}))`
  align-self: center;
  width: 90%;
  height: ${RFValue(3)}px;
  margin: ${RFValue(10)}px ${RFValue(0)}px;
`;
