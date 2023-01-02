import { Board, FieldBlock, GameDifficult } from "../types&interfaces";

/**
 *  SUM:
 * 1: CREATING THE BOARD;
 * 2: UTILS;
 * 3: ACTIONS FIELD;
 * 4: END GAME;
 * 5: EXPORTS;
 */

/* ========= // ============== // ================== // ========== */

/**
 * * * * * * * * * * * * * * * * * *
 *  1: CREATING THE BOARD
 * functions related to fields creation
 * * * * * * * * * * * * * * * * * *
 */

function boardGenerator(rows: number, columns: number): Board {
  const anyValue = 0;
  const arrayRows = Array(rows).fill(anyValue);
  const arrayColumns = Array(columns).fill(anyValue);

  const board = arrayRows.map((_, row) => {
    return arrayColumns.map((_, column) => {
      const newFieldBlock: FieldBlock = {
        row: row,
        column: column,
        isOpened: false,
        isExploded: false,
        isFlagged: false,
        isMined: false,
        nearbyMines: 0,
      };

      return newFieldBlock;
    });
  });

  return board;
}

function mineGenerator(board: Board, minesAmount: number) {
  const rows = board.length;
  const columns = board[0].length;

  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const calculus = (num: number): string => String(Math.random() * num);
    const rowSelected = parseInt(calculus(rows), 10);
    const columnSelected = parseInt(calculus(columns), 10);

    let field = board[rowSelected][columnSelected];

    if (field.isMined === false) {
      field.isMined = true;
      minesPlanted++;
    }
  }
}

function createMinedBoard(rows: number, columns: number, minesAmount: number) {
  const board = boardGenerator(rows, columns);
  mineGenerator(board, minesAmount);

  return board;
}

/* ========= // ============== // ================== // ========== */
/**
 * * * * * * * * * * * * * * * * * *
 *  2: UTILS
 * only helpers functions
 * * * * * * * * * * * * * * * * * *
 */

function cloneBoard(board: Board): Board {
  const clone = board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });

  return clone;
}

function minesAmount(rows: number, columns: number, difficulty: number) {
  return Math.ceil(columns * rows * difficulty);
}

function onlyFields(board: Board): FieldBlock[] {
  const array: FieldBlock[] = [];
  return array.concat(...board);
}

function gameDifficult(difficult: GameDifficult): GameDifficult {
  return difficult;
}

/* ========= // ============== // ================== // ========== */
/**
 * * * * * * * * * * * * * * * * * *
 *  3: ACTIONS FIELD
 * Functions related to fields actions
 * * * * * * * * * * * * * * * * * *
 */

function getNeighbors(board: Board, row: number, column: number): FieldBlock[] {
  const neighbors: FieldBlock[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;

      if (different && validRow && validColumn) {
        const field = board[r][c];
        neighbors.push(field);
      }
    });
  });

  return neighbors;
}

function safeNeighborhood(board: Board, row: number, column: number): boolean {
  const neighbors = getNeighbors(board, row, column);

  const safes = (result: boolean, neighbor: FieldBlock) =>
    result && !neighbor.isMined;

  return neighbors.reduce(safes, true);
}

function openField(board: Board, row: number, column: number) {
  const field: FieldBlock = board[row][column];
  const neighbors: FieldBlock[] = getNeighbors(board, row, column);
  const isSafeNeighborhood: boolean = safeNeighborhood(board, row, column);

  const quantityMinedNeighbors: number = neighbors.filter(
    (neighbor) => neighbor.isMined
  ).length;

  const setFieldToOpen = () => (field.isOpened = true);
  const setFieldToExploded = () => (field.isExploded = true);
  const setNearbyMines = () => (field.nearbyMines = quantityMinedNeighbors);

  const newOpenField = () => {
    neighbors.forEach((neighbor) =>
      openField(board, neighbor.row, neighbor.column)
    );
  };

  if (!field.isOpened) {
    setFieldToOpen();

    if (field.isMined) {
      setFieldToExploded();
    } else if (isSafeNeighborhood) {
      newOpenField();
    } else {
      setNearbyMines();
    }
  }
}

function toggleIsFlagged(board: Board, row: number, column: number) {
  const field = board[row][column];
  return (field.isFlagged = !field.isFlagged);
}

function amountFlagsUsed(board: Board) {
  const fields = onlyFields(board);
  return fields.filter((field) => field.isFlagged).length;
}

/* ========= // ============== // ================== // ========== */
/**
 * * * * * * * * * * * * * * * * * *
 * 4: END GAME
 * functions related of game result
 * * * * * * * * * * * * * * * * * *
 */

function hadExplosion(board: Board): boolean {
  const fields = onlyFields(board);
  return fields.filter((field) => field.isExploded).length > 0;
}

function hasPendingFields(field: FieldBlock): boolean {
  const validation =
    (field.isMined && !field.isFlagged) || (!field.isMined && !field.isOpened);

  return validation;
}

function WonGame(board: Board): boolean {
  const fields = onlyFields(board);
  const validation = fields.filter(hasPendingFields).length === 0;

  return validation;
}

function showMines(board: Board) {
  const fields = onlyFields(board);
  const minedFields = fields.filter((field) => field.isMined);

  const openMinedFields = minedFields.forEach(
    (field) => (field.isOpened = true)
  );

  return openMinedFields;
}

/* ========= // ============== // ================== // ========== */
/**
 * * * * * * * * * * * * * * * * * *
 * 5: EXPORTS
 * * * * * * * * * * * * * * * * * *
 */

export const GameLogic = {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  WonGame,
  showMines,
  toggleIsFlagged,
  amountFlagsUsed,
  minesAmount,
  gameDifficult,
};
