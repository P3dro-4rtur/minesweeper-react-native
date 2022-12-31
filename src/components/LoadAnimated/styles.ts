import styled from "styled-components/native";
import theme from "~/theme";
import LottieView from "lottie-react-native";
import loadAnimated from "@assets/animated/loader-animation.json";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.black};
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
