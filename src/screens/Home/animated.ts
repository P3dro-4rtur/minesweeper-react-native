import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  interpolate,
  interpolateColor,
  Extrapolate,
} from "react-native-reanimated";

import { Utils } from "~/utils/utils";
import { GameParams } from "~/config/params";

/**
 * Animated Config
 */
export function animatedController() {
  const labelColors = useSharedValue(0);
  const labelOpacity = useSharedValue(0);
  const buttonsPosition = useSharedValue(500);

  const labelContainerStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        labelOpacity.value,
        [0, 25, 50, 75, 100],
        [0, 0, 0.1, 0.3, 1],
        Extrapolate.EXTEND
      ),
    };
  });

  const labelTextStyleAnimated = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        labelColors.value,
        [0, 50, 100],
        ["red", "blue", "green"]
      ),
      borderBottomColor: interpolateColor(
        labelColors.value,
        [0, 50, 100],
        ["red", "blue", "green"]
      ),
    };
  });

  const buttonStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: buttonsPosition.value }],
    };
  });

  function startAnimations() {
    const time = (seconds: number) => GameParams.getSecond(seconds);
    const labelColorsTiming = Utils.createTimingAnimated(time(0.1), time(3.5));
    const amountLoops = -1;
    const isReverse = true;

    labelColors.value = withRepeat(labelColorsTiming, amountLoops, isReverse);
    labelOpacity.value = Utils.createTimingAnimated(time(0.1), time(10));
    buttonsPosition.value = Utils.createTimingAnimated(time(0.1), time(12));
  }

  return {
    labelContainerStyleAnimated,
    labelTextStyleAnimated,
    buttonStyleAnimated,
    startAnimations,
  };
}
