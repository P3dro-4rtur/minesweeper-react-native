import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface TitleProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + RFPercentage(30)}px;
`;

export const Title = styled.Text<TitleProps>`
  bottom: ${RFValue(50)}px;

  text-transform: uppercase;

  font-size: ${RFPercentage(8)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ color }) => color};

  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: ${({ color }) => color};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DecorationContainer = styled.View`
  margin-top: ${RFValue(50)}px;
`;

export const Options = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(60)}px;
`;
