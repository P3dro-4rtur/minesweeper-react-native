import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import LottieView from "lottie-react-native";
import loadAnimated from "@assets/animated/loader-animation.json";
import { TypeMessage } from "~/config/types&interfaces";
import theme from "~/theme";

interface LabelProps {
  color: string;
}

interface MessageTitleProps {
  colorByType: TypeMessage;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-left: ${RFValue(13)}px;
  padding-right: ${RFValue(13)}px;

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

export const MessageTitle = styled.Text<MessageTitleProps>`
  text-transform: uppercase;

  font-size: ${RFValue(16)}px;
  font-family: ${theme.fontFamily.default_regular};

  line-height: ${RFValue(30)}px;

  color: ${({ colorByType }) => {
    switch (colorByType) {
      case "tip":
        return theme.colors.yellow_300;

      case "curiosity":
        return theme.colors.blue_200;

      case "general":
        return theme.colors.green_200;
    }
  }};
`;

export const Message = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fontFamily.default_regular};

  line-height: ${RFValue(25)}px;

  color: ${theme.colors.gray_100};
`;
