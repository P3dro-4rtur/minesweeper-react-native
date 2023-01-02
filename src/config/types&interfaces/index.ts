enum GameResults {
  none = "none",
  won = "Won",
  lose = "Lose",
}

enum GameDifficult {
  none = 0,
  easy = 0.1,
  medium = 0.2,
  hard = 0.3,
}
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

export { FieldBlock, Board, GameResults, GameDifficult };
