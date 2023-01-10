import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + RFPercentage(30)}px;
`;

export const TitleAnimated = styled(Animated.Text)`
  bottom: ${RFValue(50)}px;

  text-align: center;
  text-transform: uppercase;

  font-size: ${RFPercentage(7.3)}px; //50
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.white};

  border-bottom-width: ${RFValue(2)}px;
  border-bottom-color: ${({ theme }) => theme.colors.white};
`;

export const Row = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Column = styled.View`
  flex-direction: row;
`;

export const DecorationContainer = styled.View`
  margin-top: ${RFValue(50)}px;
`;

export const Options = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(60)}px;
`;
