import styled, { css } from "styled-components/native";
import theme from "~/theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface Size {
  size: number;
}

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

export const FlagPole = styled.View<Size>`
  position: absolute;

  ${({ size }) => css`
    width: ${RFValue(2 * size)}px;
    height: ${RFValue(14 * size)}px;
    margin-left: ${RFValue(9 * size)}px;
  `}
  background-color: ${theme.colors.gray_500};
`;

export const FlagBanner = styled.View<Size>`
  position: absolute;

  ${({ size }) => css`
    width: ${RFValue(6 * size)}px;
    height: ${RFValue(5 * size)}px;
    margin-left: ${RFValue(3 * size)}px;
  `}
  background-color: ${theme.colors.red_400};
`;

export const BaseFirstPart = styled.View<Size>`
  position: absolute;

  ${({ size }) => css`
    width: ${RFValue(6 * size)}px;
    height: ${RFValue(3 * size)}px;
    margin-left: ${RFValue(7 * size)}px;
    margin-top: ${RFValue(10.7 * size)}px;
  `};
  background-color: ${theme.colors.gray_500};
`;

export const BaseSecondPart = styled.View<Size>`
  position: absolute;

  ${({ size }) => css`
    width: ${RFValue(10 * size)}px;
    height: ${RFValue(2.5 * size)}px;
    margin-left: ${RFValue(5 * size)}px;
    margin-top: ${RFValue(12 * size)}px;
  `}
  background-color: ${theme.colors.gray_500};
`;
