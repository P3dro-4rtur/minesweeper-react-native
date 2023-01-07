import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import LottieView from "lottie-react-native";
import loadAnimated from "@assets/animated/loader-animation.json";

import theme from "~/theme";

interface LabelProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.black};
`;

export const LoadingLabel = styled.Text<LabelProps>`
  text-transform: uppercase;

  font-size: ${RFValue(40)}px;
  font-family: ${theme.fontFamily.default_medium};

  color: ${({ color }) => color};
`;

export const Loader = styled(LottieView).attrs({
  source: loadAnimated,
  loop: true,
  autoPlay: true,
  resizeMode: "contain",
})`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;

  background-color: ${theme.colors.black};
`;

export const MessageContainer = styled.View`
  bottom: ${RFValue(50)}px;
`;

export const MessageTitle = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(16)}px;
  font-family: ${theme.fontFamily.default_regular};

  line-height: ${RFValue(30)}px;

  color: ${theme.colors.yellow_300};
`;

export const Message = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fontFamily.default_regular};

  line-height: ${RFValue(25)}px;

  color: ${theme.colors.gray_100};
`;
