import React, { useState, useEffect } from "react";
import { Board, GameResults, GameDifficult } from "@config/types&interfaces/";
import { params } from "~/config/params";
import { GameLogic } from "~/config/gameLogic";
import { MineField } from "./components/MineField";
import { Container, MineFieldContainer } from "./styles";

export const Game: React.FC = () => {
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);
  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameDifficult.none
  );

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
      console.log(`${gameResult} - Que burro! Você perdeu!`);
      GameLogic.showMines(board);
      setGameResult(GameResults.lose);
    }

    if (won) {
      console.log(`${gameResult} - Você venceu!`);
      setGameResult(GameResults.won);
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
