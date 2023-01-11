import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const MineFieldContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;
