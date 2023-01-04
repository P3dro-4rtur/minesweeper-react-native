import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface TitleProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFPercentage(30)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text<TitleProps>`
  text-transform: uppercase;

  font-size: ${RFPercentage(8)}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ color }) => color};
`;

export const Options = styled.View`
  align-items: center;
  justify-content: center;
`;
