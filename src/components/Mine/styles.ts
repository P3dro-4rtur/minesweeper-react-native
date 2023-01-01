import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  top: ${RFValue(3)}px;
  left: ${RFValue(1)}px;
`;
export const CoreMine = styled.View`
  align-items: center;
  justify-content: center;

  width: ${RFValue(14)}px;
  height: ${RFValue(14)}px;

  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LineMine = styled.View`
  position: absolute;

  width: ${RFValue(20)}px;
  height: ${RFValue(3)}px;

  border-radius: ${RFValue(3)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;
