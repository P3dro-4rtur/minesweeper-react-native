enum GameResults {
  none = "none",
  won = "Won",
  lose = "Lose",
}

enum GameDifficult {
  none = "None",
  easy = "Easy",
  medium = "Medium",
  hard = "Hard",
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
