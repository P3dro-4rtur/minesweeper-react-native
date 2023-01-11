import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface StartLabelProps {
  colorByDisable: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;

  margin-top: ${RFValue(20)}px;

  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;

  ${({ theme }) => theme.colors.black}
`;

export const WrapperButtonLeft = styled.View`
  flex-direction: column;
`;

export const ButtonFlag = styled.TouchableOpacity`
  flex-direction: row;

  align-items: flex-start;
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

export const AmountFlags = styled.Text`
  right: ${RFValue(70)}px;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const TimerContainer = styled.View`
  align-self: flex-start;
  justify-self: center;

  top: ${RFValue(5)}px;
  right: ${RFValue(13)}px;

  margin-left: ${RFValue(5)}px;
  margin-right: ${RFValue(5)}px;
`;

export const WrapperButtonsRight = styled.View`
  flex-direction: column;
`;

export const ButtonHome = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: ${RFValue(0)}px ${RFValue(5)}px;
`;

export const ButtonHomeLabel = styled.Text`
  text-transform: uppercase;
  margin-left: ${RFValue(10)}px;
  margin-right: ${RFValue(5)}px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_100};
`;

export const ButtonStart = styled.TouchableOpacity`
  margin-top: ${RFValue(10)}px;
`;

export const ButtonStartLabel = styled.Text<StartLabelProps>`
  text-transform: uppercase;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme, colorByDisable }) =>
    !colorByDisable ? theme.colors.gray_light_200 : theme.colors.gray_500};
`;
