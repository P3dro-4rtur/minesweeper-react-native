import theme from "~/theme";
import styled, { css } from "styled-components/native";
import ReactNativeModal from "react-native-modal";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { GameParams } from "~/config/params";

export type Level = "Easy" | "Medium" | "Hard" | "VeryHard" | "God";
interface ColorsByDifficultLevel {
  level: "Easy" | "Medium" | "Hard" | "VeryHard" | "God";
}

interface ButtonLevelProps {
  isSelected: boolean;
}

const colors = {
  Easy: theme.colors.green_200,
  Medium: theme.colors.yellow_300,
  Hard: theme.colors.orange,
  VeryHard: theme.colors.red_700,
  God: theme.colors.white,
};

export const Modal = styled(ReactNativeModal)`
  flex: 1;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const ButtonCloseLabel = styled.Text`
  position: absolute;

  left: ${RFPercentage(19)}px;
  bottom: ${RFPercentage(4)}px;

  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_medium};

  color: ${({ theme }) => theme.colors.gray_100};
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  height: ${RFValue(400)}px;

  border-width: ${GameParams.dimensions.borderSize}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border-left-color: ${theme.colors.gray_100};
    border-top-color: ${theme.colors.gray_100};
    border-right-color: ${theme.colors.gray_400};
    border-bottom-color: ${theme.colors.gray_400};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.default_medium};
    color: ${theme.colors.gray_100};
  `}
`;

export const LevelOptions = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const ButtonLevel = styled.TouchableOpacity<ButtonLevelProps>`
  align-items: center;
  width: ${RFValue(300)}px;

  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.colors.selector};
`;

export const LabelLevel = styled.Text<ColorsByDifficultLevel>`
  text-transform: uppercase;
  font-size: ${RFValue(20)}px;

  ${({ level, theme }) => css`
    color: ${colors[level]};
    font-family: ${theme.fontFamily.default_bold};
  `}
`;
