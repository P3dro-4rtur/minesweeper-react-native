import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const MineFieldContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;

export const Title = styled.Text``;
