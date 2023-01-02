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

type GameResult = "Won" | "Lose" | undefined;

type GameDifficult = "Easy" | "Medium" | "Hard" | undefined;

export { FieldBlock, Board, GameResult, GameDifficult };
