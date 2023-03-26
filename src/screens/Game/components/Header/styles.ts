import styled, { css } from "styled-components/native";
import { Responsive } from "~/utils/responsive";

interface StartLabelProps {
  colorByDisable: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;

  margin-top: ${Responsive.RFValue(20)}px;

  padding-left: ${Responsive.RFValue(20)}px;
  padding-right: ${Responsive.RFValue(20)}px;

  ${({ theme }) => theme.colors.black}
`;

export const WrapperButtonLeft = styled.View`
  flex-direction: column;
`;

export const ButtonFlag = styled.TouchableOpacity`
  flex-direction: row;

  align-items: flex-start;
  justify-content: space-between;

  width: ${Responsive.widthInPixelToDP(110)}px;
  margin-right: ${Responsive.RFValue(20)}px;
`;

export const ButtonFlagLabel = styled.Text`
  top: ${Responsive.RFValue(35)}px;
  right: ${Responsive.RFValue(10)}px;

  text-transform: uppercase;

  font-size: ${Responsive.fontInPixelToDP(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const AmountFlags = styled.Text`
  right: ${Responsive.RFValue(70)}px;

  font-size: ${Responsive.fontInPixelToDP(20)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_light_200};
`;

export const TimerContainer = styled.View`
  align-self: flex-start;
  justify-self: center;

  top: ${Responsive.RFValue(5)}px;
  right: ${Responsive.RFValue(13)}px;

  margin-left: ${Responsive.RFValue(5)}px;
  margin-right: ${Responsive.RFValue(5)}px;
`;

export const WrapperButtonsRight = styled.View`
  flex-direction: column;
`;

export const ButtonHome = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0px ${Responsive.RFValue(5)}px;
`;

export const ButtonHomeLabel = styled.Text`
  text-transform: uppercase;
  margin-left: ${Responsive.RFValue(10)}px;
  margin-right: ${Responsive.RFValue(5)}px;

  font-size: ${Responsive.fontInPixelToDP(15)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.gray_100};
`;

export const ButtonStart = styled.TouchableOpacity`
  margin-top: ${Responsive.RFValue(10)}px;
`;

export const ButtonStartLabel = styled.Text<StartLabelProps>`
  text-transform: uppercase;

  font-size: ${Responsive.fontInPixelToDP(15)}px;

  ${({ theme: { colors, fontFamily }, colorByDisable }) =>
    css`
      font-family: ${fontFamily.default_bold};
      color: ${!colorByDisable ? colors.gray_light_200 : colors.gray_500};
    `};
`;
