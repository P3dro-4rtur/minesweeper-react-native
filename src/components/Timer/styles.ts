import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  top: ${RFValue(5)}px;
  right: ${RFValue(10)}px;

  width: ${RFValue(115)}px;
  height: ${RFValue(55)}px;

  align-items: center;
  justify-content: center;

  border-top-width: ${RFValue(3)}px;
  border-left-width: ${RFValue(3)}px;
  border-bottom-width: ${RFValue(2)}px;
  border-right-width: ${RFValue(2)}px;

  ${({ theme }) => css`
    border-left-color: ${theme.colors.gray_100};
    border-top-color: ${theme.colors.gray_100};
    border-bottom-color: ${theme.colors.gray_200};
    border-right-color: ${theme.colors.gray_200};
  `}
`;
export const BackgroundLabel = styled.Text`
  position: absolute;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fontFamily.countdown_Bold};
  color: ${({ theme }) => theme.colors.red_500_opacity};
`;

export const CountLabel = styled.Text`
  position: absolute;
  right: ${RFValue(15)}px;

  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fontFamily.countdown_Bold};
  color: ${({ theme }) => theme.colors.red_500};
`;
