import theme from "~/theme/index";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-around;

  background-color: ${theme.colors.black};
`;

export const Footer = styled.View`
  margin-bottom: ${RFValue(20)}px;
`;

export const FooterButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: ${RFValue(7)}px;
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fontFamily.countdown_medium};

  line-height: ${RFValue(15)}px;

  color: ${theme.colors.pink_500};
`;
export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fontFamily.countdown_medium};

  line-height: ${RFValue(15)}px;

  color: ${theme.colors.white};
`;
