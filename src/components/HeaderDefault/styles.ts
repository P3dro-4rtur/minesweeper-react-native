import styled, { css } from "styled-components/native";
import { ArrowFatLeft } from "phosphor-react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${RFPercentage(5)}px;
  padding-left: ${RFValue(10)}px;
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
