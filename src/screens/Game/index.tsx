import React, { useState, useEffect } from "react";
import { Board, GameResult, GameDifficult } from "@config/types&interfaces";
import { params } from "~/config/params";
import { GameLogic } from "~/config/functions";
import { MineField } from "./components/MineField";
import { Container, MineFieldContainer } from "./styles";

export const Game: React.FC = () => {
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameResult, setGameResult] = useState<GameResult>(undefined);
  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(undefined);

  function initGame() {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(
      rows,
      columns,
      params.difficultLevel
    );

    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    setGameBoard(board);
    setGameDifficult(GameLogic.gameDifficult(params.difficultLevel));
  }

  function handleOpenField(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.openField(board, row, column);

    const won = GameLogic.WonGame(board);
    const lose = GameLogic.hadExplosion(board);

    if (lose) {
      console.log("Que buuuurro! Perdeu!");
      GameLogic.showMines(board);
    }

    if (won) {
      console.log("Você venceu!");
    }

    setGameBoard(board);
  }

  function handleSetFlag(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.toggleIsFlagged(board, row, column);

    setGameBoard(board);
  }

  useEffect(() => {
    initGame();
  }, []);

  return (
    <Container>
      <MineFieldContainer>
        <MineField
          board={gameBoard}
          onOpenField={(row, column) => handleOpenField(row, column)}
          onSetFlag={(row, column) => handleSetFlag(row, column)}
        />
      </MineFieldContainer>
    </Container>
  );
};
