import { Board, FieldBlock } from "../types&interfaces";

/**
 * * * * * * * * * * * * * * * * * *
 *   CREATING THE BOARD
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
    function calculus(num: number): string {
      return String(Math.random() * num);
    }

    const rowSelected = parseInt(calculus(rows), 10);
    const columnSelected = parseInt(calculus(columns), 10);
    let blockSelected = board[rowSelected][columnSelected];

    if (blockSelected.isMined === false) {
      blockSelected.isMined = true;
      minesPlanted++;
    }
  }
}

/* util function */
function cloneBoard(board: Board): Board {
  const clone = board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });

  return clone;
}

function createMinedBoard(rows: number, columns: number, minesAmount: number) {
  const board = boardGenerator(rows, columns);
  mineGenerator(board, minesAmount);

  return board;
}

/* ========= // ============== // ================== // ========== */
/**
 * * * * * * * * * * * * * * * * * *
 *   ACTIONS FIELD
 * Functions related to fields actions
 * * * * * * * * * * * * * * * * * *
 */

function getNeighbors(board: Board, row: number, column: number): FieldBlock[] {
  let neighbors: FieldBlock[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach((r) => {
    columns.forEach((c) => {
      const fieldSelected = board[r][c];
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c <= board[0].length;

      if (different && validRow && validColumn) {
        neighbors.push(fieldSelected);
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

/* ========= // ============== // ================== // ========== */

function onlyFields(board: Board): FieldBlock[] {
  const array: FieldBlock[] = [];
  return array.concat(...board);
}

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

  return fields
    .filter((field) => field.isMined)
    .forEach((field) => (field.isOpened = true));
}
