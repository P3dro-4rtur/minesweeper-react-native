import React from "react";
import { params } from "~/config/params";
import { Field } from "~/components/Field";
import { Container, Title } from "./styles";
import { Flag } from "~/components/Flag";

export function Game() {
  return (
    <Container>
      <Title>
        Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Title>
      <Field isOpened={false} />
      <Field isOpened />
      <Field isOpened nearbyMines={1} />
      <Field isOpened nearbyMines={2} />
      <Field isOpened nearbyMines={3} />
      <Field isOpened nearbyMines={8} />
      <Field isOpened isMined />
      <Field isOpened isExploded />
      <Field isOpened={false} isFlagged />

      <Flag type="bigger" />
    </Container>
  );
}
