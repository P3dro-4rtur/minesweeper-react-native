import { Message, TypeMessage } from "../messages";
interface FieldBlock {
  row: number;
  column: number;
  isOpened: boolean;
  isFlagged: boolean;
  isMined: boolean;
  isExploded: boolean;
  nearbyMines: number;
}

type Board = FieldBlock[][];

export { FieldBlock, Board, Message, TypeMessage };
