import React from "react";
import { Field } from "~/components/Field";
import { Board, FieldBlock } from "~/config/types&interfaces";
import { Rows, Columns } from "./styles";

type Rows = JSX.Element[];
type Columns = JSX.Element[];
interface MineFieldProps {
  board: Board;
  disableFields: boolean;
  onOpenField: (rowIndex: number, columnIndex: number) => void;
  onSetFlag: (rowIndex: number, columnIndex: number) => void;
}

export const MineField: React.FC<MineFieldProps> = (props) => {
  const { board, disableFields, onOpenField, onSetFlag } = props;

  const rows: Rows = board.map((row: FieldBlock[], rowIndex: number) => {
    const columns: Columns = row.map(
      (field: FieldBlock, columnIndex: number) => {
        return (
          <Field
            {...field}
            key={columnIndex}
            disableField={disableFields}
            onOpen={() => onOpenField(rowIndex, columnIndex)}
            onSetFlag={() => onSetFlag(rowIndex, columnIndex)}
          />
        );
      }
    );
    return <Columns key={rowIndex}>{columns}</Columns>;
  });

  return <Rows>{rows}</Rows>;
};
