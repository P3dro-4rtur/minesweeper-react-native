import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Utils } from "~/utils/utils";

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  width: 100%;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Utils.randomOpacityColor()};
    `};
`;
export const Title = styled.Text`
  text-transform: capitalize;

  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_medium};

  color: ${({ theme }) => theme.colors.gray_light_100};
`;
