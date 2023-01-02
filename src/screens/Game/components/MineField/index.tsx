import React from "react";
import { Field } from "~/components/Field";
import { Board, FieldBlock } from "~/config/types&interfaces";
import { Rows, Columns } from "./styles";

interface MineFieldProps {
  board: Board;
  onOpenField: (rowIndex: number, columnIndex: number) => void;
  onSetFlag: (rowIndex: number, columnIndex: number) => void;
}

export const MineField: React.FC<MineFieldProps> = (props) => {
  const { board, onOpenField, onSetFlag } = props;

  const rows = board.map((row: FieldBlock[], rowIndex: number) => {
    const columns = row.map((field: FieldBlock, columnIndex: number) => {
      return (
        <Field
          {...field}
          key={columnIndex}
          onOpen={() => onOpenField(rowIndex, columnIndex)}
          onSetFlag={() => onSetFlag(rowIndex, columnIndex)}
        />
      );
    });
    return <Columns key={rowIndex}>{columns}</Columns>;
  });

  return <Rows>{rows}</Rows>;
};
