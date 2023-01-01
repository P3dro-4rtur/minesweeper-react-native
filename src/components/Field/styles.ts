import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { params } from "~/config/params";

export type TypeStyledField = "regular" | "opened" | "exploded" | "flagged";

interface Props {
  type: TypeStyledField;
}

interface AmountOfNearbyMinesProps {
  nearbyMines: number;
}

export const Block = styled.View<Props>`
  width: ${params.dimensions.blockSize}px;
  height: ${params.dimensions.blockSize}px;
  border-width: ${params.dimensions.borderSize}px;

  ${({ theme, type }) => {
    switch (type) {
      case "regular":
        return css`
          background-color: ${theme.colors.gray_200};
          border-left-color: ${theme.colors.gray_100};
          border-top-color: ${theme.colors.gray_100};
          border-right-color: ${theme.colors.gray_400};
          border-bottom-color: ${theme.colors.gray_400};
        `;

      case "opened":
        return css`
          align-items: center;
          justify-content: center;
          border-color: ${theme.colors.gray_300};
          background-color: ${theme.colors.gray_200};
        `;

      case "exploded":
        return css`
          border-color: ${theme.colors.red_700};
          background-color: ${theme.colors.red_700};
        `;

      default:
        return;
    }
  }}
`;

export const AmountOfNearbyMines = styled.Text<AmountOfNearbyMinesProps>`
  line-height: ${RFValue(25)}px;

  font-size: ${params.dimensions.fontSize}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  ${({ theme, nearbyMines }) => {
    if (nearbyMines === 1)
      return css`
        color: ${theme.colors.blue_400};
      `;

    if (nearbyMines === 2)
      return css`
        color: ${theme.colors.green_600};
      `;

    if (nearbyMines > 2 && nearbyMines < 6)
      return css`
        color: ${theme.colors.red_500};
      `;

    if (nearbyMines >= 6)
      return css`
        color: ${theme.colors.pink_500};
      `;
  }}
`;
