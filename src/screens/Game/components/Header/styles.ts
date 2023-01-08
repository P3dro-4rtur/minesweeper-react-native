import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: flex-start;
  justify-content: space-around;

  width: 100%;

  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;

  ${({ theme }) => theme.colors.black}
`;

export const ButtonFlag = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  width: ${RFValue(110)}px;
  margin-right: ${RFValue(20)}px;
`;

export const ButtonFlagLabel = styled.Text`
  top: ${RFValue(35)}px;
  right: ${RFValue(10)}px;

  text-transform: uppercase;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const Wrapper = styled.View`
  flex-direction: column;
  left: ${RFValue(10)}px;
`;

export const AmountFlags = styled.Text`
  right: ${RFValue(65)}px;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const TimerContainer = styled.View`
  left: ${RFValue(30)}px;
`;

export const ButtonStart = styled.TouchableOpacity`
  top: ${RFValue(40)}px;
`;

export const ButtonStartLabel = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const ButtonHome = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  left: ${RFValue(80)}px;
`;

export const ButtonHomeLabel = styled.Text`
  text-transform: uppercase;

  top: ${RFValue(2)}px;
  right: ${RFValue(10)}px;

  padding-left: ${RFValue(10)}px;
  padding-right: ${RFValue(10)}px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_100};
`;
