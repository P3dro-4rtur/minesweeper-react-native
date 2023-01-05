import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(20)}px;

  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.countdown_Bold};

  color: ${({ theme }) => theme.colors.red_500_opacity};
`;
