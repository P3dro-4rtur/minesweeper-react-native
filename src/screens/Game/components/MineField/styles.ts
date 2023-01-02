import styled from "styled-components/native";

export const Rows = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_light_100};
`;

export const Columns = styled.View`
  flex-direction: row;
`;
