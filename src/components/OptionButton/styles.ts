import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  align-items: center;

  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;

  margin: ${RFValue(15)}px;

  border-top-width: ${RFValue(2)}px;
  border-left-width: ${RFValue(2)}px;
  border-right-width: ${RFValue(1)}px;
  border-bottom-width: ${RFValue(1)}px;

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
  font-family: ${({ theme }) => theme.fontFamily.medium};

  color: ${({ theme }) => theme.colors.gray_100};
`;
