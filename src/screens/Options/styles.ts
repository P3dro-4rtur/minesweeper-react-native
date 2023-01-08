import styled, { css } from "styled-components/native";
import { ArrowFatLeft } from "phosphor-react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(0)}px ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${RFPercentage(5)}px;
  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const TitleHeader = styled.Text`
  text-transform: uppercase;
  margin-right: ${RFValue(125)}px;

  font-size: ${RFValue(23)}px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    font-family: ${theme.fontFamily.default_bold};
  `}
`;

export const BackButton = styled.TouchableOpacity``;

export const BackArrow = styled(ArrowFatLeft)``;

export const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(50)}px;
`;

export const Separator = styled.View`
  align-self: center;
  width: 90%;
  height: ${RFValue(3)}px;
  margin: ${RFValue(10)}px ${RFValue(0)}px;

  background-color: ${({ theme }) => theme.colors.gray_400};
`;
