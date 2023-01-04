import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-self: center;
  bottom: ${RFPercentage(8)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const FlagPole = styled.View`
  position: absolute;
  width: ${RFValue(2 * 5)}px;
  height: ${RFValue(14 * 5)}px;
  margin-left: ${RFValue(9 * 5)}px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const FlagBanner = styled.View`
  position: absolute;
  width: ${RFValue(6 * 5)}px;
  height: ${RFValue(5 * 5)}px;
  margin-left: ${RFValue(3 * 5)}px;
  background-color: ${({ theme }) => theme.colors.red_400};
`;

export const BaseFirstPart = styled.View`
  position: absolute;
  width: ${RFValue(6 * 5)}px;
  height: ${RFValue(2 * 5)}px;
  margin-left: ${RFValue(7 * 5)}px;
  margin-top: ${RFValue(10 * 5)}px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const BaseSecondPart = styled.View`
  position: absolute;
  width: ${RFValue(10 * 5)}px;
  height: ${RFValue(2 * 5)}px;
  margin-left: ${RFValue(5 * 5)}px;
  margin-top: ${RFValue(12 * 5)}px;
  background-color: ${({ theme }) => theme.colors.gray_500};
`;
