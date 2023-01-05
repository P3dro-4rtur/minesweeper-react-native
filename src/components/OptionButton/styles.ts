import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  align-items: center;

  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;

  margin: ${RFValue(15)}px;

  border-top-width: ${RFValue(2)}px;
  border-left-width: ${RFValue(2)}px;
  border-right-width: ${RFValue(1)}px;
  border-bottom-width: ${RFValue(1)}px;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.selector : theme.colors.black};

  ${({ theme }) => css`
    border-top-color: ${theme.colors.gray_200};
    border-left-color: ${theme.colors.gray_200};
    border-right-color: ${theme.colors.gray_400};
    border-bottom-color: ${theme.colors.gray_400};
  `}
`;
export const Title = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_medium};

  color: ${({ theme }) => theme.colors.gray_100};
`;
