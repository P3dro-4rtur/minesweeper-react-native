enum GameResults {
  none = "none",
  won = "Won",
  lose = "Lose",
}

enum GameDifficult {
  none = 0,
  easy = 0.1,
  medium = 0.3,
  hard = 0.5,
  veryHard = 0.7,
  god = 0.8,
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
