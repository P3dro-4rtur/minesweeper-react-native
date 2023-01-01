import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ComponentProps {
  type: "regular" | "bigger";
}

export const Container = styled.View`
  margin-top: ${RFValue(2)}px;
`;

export const FlagPole = styled.View<ComponentProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray_500};

  ${({ type }) => {
    switch (type) {
      case "regular":
        return css`
          width: ${RFValue(2)}px;
          height: ${RFValue(14)}px;
          margin-left: ${RFValue(9)}px;
        `;

      case "bigger":
        return css`
          width: ${RFValue(4)}px;
          height: ${RFValue(28)}px;
          margin-left: ${RFValue(3)}px;
        `;

      default:
        return;
    }
  }}
`;

export const FlagBanner = styled.View<ComponentProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.red_400};

  ${({ type }) => {
    switch (type) {
      case "regular":
        return css`
          width: ${RFValue(6)}px;
          height: ${RFValue(5)}px;
          margin-left: ${RFValue(3)}px;
        `;

      case "bigger":
        return css`
          width: ${RFValue(14)}px;
          height: ${RFValue(12)}px;
          margin-left: ${RFValue(3)}px;
        `;

      default:
        return;
    }
  }}
`;

export const BaseFirstPart = styled.View<ComponentProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray_500};

  ${({ type }) => {
    switch (type) {
      case "regular":
        return css`
          width: ${RFValue(6)}px;
          height: ${RFValue(2)}px;
          margin-left: ${RFValue(7)}px;
          margin-top: ${RFValue(10)}px;
        `;

      case "bigger":
        return css`
          width: ${RFValue(12)}px;
          height: ${RFValue(4)}px;
          margin-left: ${RFValue(12)}px;
          margin-top: ${RFValue(20)}px;
        `;

      default:
        return;
    }
  }}
`;

export const BaseSecondPart = styled.View<ComponentProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray_500};

  ${({ type }) => {
    switch (type) {
      case "regular":
        return css`
          width: ${RFValue(10)}px;
          height: ${RFValue(2)}px;
          margin-left: ${RFValue(5)}px;
          margin-top: ${RFValue(12)}px;
        `;

      case "bigger":
        return css`
          width: ${RFValue(20)}px;
          height: ${RFValue(4)}px;
          margin-left: ${RFValue(8)}px;
          margin-top: ${RFValue(24)}px;
        `;

      default:
        return;
    }
  }}
`;
