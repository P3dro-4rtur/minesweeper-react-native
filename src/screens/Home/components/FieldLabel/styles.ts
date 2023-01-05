import styled, { css } from "styled-components/native";
import { GameParams } from "~/config/params";

export const Block = styled.View`
  width: ${GameParams.dimensions.blockSize}px;
  height: ${GameParams.dimensions.blockSize}px;
  border-width: ${GameParams.dimensions.borderSize}px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_200};
    border-left-color: ${theme.colors.gray_100};
    border-top-color: ${theme.colors.gray_100};
    border-right-color: ${theme.colors.gray_400};
    border-bottom-color: ${theme.colors.gray_400};
  `}
`;
