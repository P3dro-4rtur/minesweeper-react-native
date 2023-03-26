import styled, { css } from "styled-components/native";
import ReactNativeModal from "react-native-modal";
import { GameParams } from "~/config/params";
import { Responsive } from "~/utils/responsive";

export const Modal = styled(ReactNativeModal)`
  flex: 1;

  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.View`
  padding: ${Responsive.RFValue(30)}px ${Responsive.RFValue(20)}px;

  align-items: center;
  justify-content: flex-start;

  height: ${Responsive.heightInPixelToDP(300)}px;
  width: ${Responsive.widthInPixelToDP(370)}px;

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
  font-size: ${Responsive.fontInPixelToDP(30)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_bold};

  border-bottom-width: ${Responsive.RFValue(2)}px;
  border-bottom-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ContinueButton = styled.TouchableOpacity`
  padding: ${Responsive.RFValue(10)}px ${Responsive.RFValue(30)}px;
  border-width: ${Responsive.RFValue(2)}px;

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

  font-size: ${Responsive.fontInPixelToDP(18)}px;
  font-family: ${({ theme }) => theme.fontFamily.default_medium};

  color: ${({ theme }) => theme.colors.yellow_300};
`;

export const TrophyContainer = styled.View`
  flex: 1;
  width: 100%;
`;
