import styled from "styled-components/native";
import { Responsive } from "~/utils/responsive";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const WarningWrapper = styled.View``;

export const WarningTitle = styled.Text`
  margin-top: ${Responsive.RFPercentage(15)}px;

  font-size: ${Responsive.RFValue(5)}px;
  font-family: ${({ theme }) => theme.fontFamily.text_pixel_regular_ps2p};

  color: ${({ theme }) => theme.colors.yellow_300};
`;

export const Warning = styled.Text`
  margin-top: ${Responsive.RFPercentage(5)}px;
  margin-left: ${Responsive.RFValue(30)}px;

  font-size: ${Responsive.RFValue(6)}px;
  font-family: ${({ theme }) => theme.fontFamily.text_pixel_regular_ps2p};

  color: ${({ theme }) => theme.colors.yellow_300};
`;
