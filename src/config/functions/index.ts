import { Board, FieldBlock } from "../types&interfaces";

function boardGenerator(rows: number, columns: number): Board {
  const anyValue = 0;
  const arrayRows = Array(rows).fill(anyValue);
  const arrayColumns = Array(columns).fill(anyValue);

  const board = arrayRows.map((_, row) => {
    return arrayColumns.map((_, column) => {
      const newFieldBlock: FieldBlock = {
        row,
        column,
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

/* ========= // ============== // ================== // ========== */

function createMinedBoard(rows: number, columns: number, minesAmount: number) {
  const board = boardGenerator(rows, columns);
  const minedBoard = mineGenerator(board, minesAmount);

  return minedBoard;
}

export { createMinedBoard };
