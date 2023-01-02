export interface FieldBlock {
  row: number;
  column: number;
  isOpened: boolean;
  isFlagged: boolean;
  isMined: boolean;
  isExploded: boolean;
  nearbyMines: number;
}

export type Board = FieldBlock[][];
