import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import trophyAnimated from "@assets/animated/trophy-animation.json";

export const Container = styled.View`
  flex: 1;
`;

export const Trophy = styled(LottieView).attrs({
  source: trophyAnimated,
  loop: false,
  autoPlay: true,
  resizeMode: "contain",
})``;
