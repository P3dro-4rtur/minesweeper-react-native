import { Dimensions, PixelRatio } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const widthInPixelToDP = (widthInPixel: number): number => {
  const widthPercent = (widthInPixel * 100) / screenWidth;
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

const heightInPixelToDP = (heightInPixel: number): number => {
  const heightPercent = (heightInPixel * 100) / screenHeight;
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

const fontInPixelToDP = (fontInPixel: number): number => {
  return RFValue(fontInPixel);
};

export const Responsive = {
  screenWidth,
  screenHeight,
  RFValue,
  RFPercentage,
  widthInPixelToDP,
  heightInPixelToDP,
  fontInPixelToDP,
};
