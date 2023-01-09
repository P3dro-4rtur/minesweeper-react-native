import styled from "styled-components/native";
import theme from "~/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const num = 7.5;

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  bottom: ${RFPercentage(8)}px;
  margin-right: ${RFPercentage(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const FlagPole = styled.View`
  position: absolute;
  width: ${RFValue(2 * num)}px;
  height: ${RFValue(14 * num)}px;
  margin-left: ${RFValue(9 * num)}px;
  background-color: ${theme.colors.gray_500};
`;

export const FlagBanner = styled.View`
  position: absolute;
  width: ${RFValue(6 * num)}px;
  height: ${RFValue(5 * num)}px;
  margin-left: ${RFValue(3 * num)}px;
  background-color: ${theme.colors.red_400};
`;

export const BaseFirstPart = styled.View`
  position: absolute;
  width: ${RFValue(6 * num)}px;
  height: ${RFValue(3 * num)}px;
  margin-left: ${RFValue(7 * num)}px;
  margin-top: ${RFValue(10 * num)}px;
  background-color: ${theme.colors.gray_500};
`;

export const BaseSecondPart = styled.View`
  position: absolute;
  width: ${RFValue(10 * num)}px;
  height: ${RFValue(2 * num)}px;
  margin-left: ${RFValue(5 * num)}px;
  margin-top: ${RFValue(12 * num)}px;
  background-color: ${theme.colors.gray_500};
`;
