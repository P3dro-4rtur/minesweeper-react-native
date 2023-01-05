import styled, { css } from "styled-components/native";
import ReactNativeModal from "react-native-modal";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { GameParams } from "~/config/params";

export const Modal = styled(ReactNativeModal)`
  flex: 1;

  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.View`
  padding: ${RFValue(30)}px ${RFValue(20)}px;

  align-items: center;
  justify-content: flex-start;

  height: ${RFValue(300)}px;
  width: ${RFValue(370)}px;

  border-width: ${GameParams.dimensions.borderSize}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.yellow_300};
    border-left-color: ${theme.colors.gray_100};
    border-top-color: ${theme.colors.gray_100};
    border-right-color: ${theme.colors.gray_400};
    border-bottom-color: ${theme.colors.gray_400};
  `}
`;

export const LabelContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LabelResult = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ContinueButton = styled.TouchableOpacity`
  padding: ${RFValue(10)}px ${RFValue(30)}px;
  border-width: ${RFValue(2)}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-left-color: ${theme.colors.gray_100};
    border-top-color: ${theme.colors.gray_100};
    border-bottom-color: ${theme.colors.gray_200};
    border-right-color: ${theme.colors.gray_200};
  `};
`;

export const ContinueButtonLabel = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_medium};

  color: ${({ theme }) => theme.colors.yellow_300};
`;
