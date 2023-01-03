import React, { useState, useEffect } from "react";
import { Board, GameResults, GameDifficult } from "@config/types&interfaces/";
import { params } from "~/config/params";
import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { GameLogic } from "~/config/gameLogic";
import { Header } from "../Game/components/Header";
import { MineField } from "./components/MineField";
import { Container, MineFieldContainer } from "./styles";

export const Game: React.FC = () => {
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameFlags, setGameFlags] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);
  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameDifficult.none
  );
  const { playSound, stopSound } = useGameSound();

  function initGame() {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(
      rows,
      columns,
      params.difficultLevel
    );

    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    setGameDifficult(GameLogic.gameDifficult(params.difficultLevel));
    setGameResult(GameResults.none);
    setGameBoard(board);
    playSound(GameSounds.theme);
  }

  function gameFlagsController() {
    const board = GameLogic.cloneBoard(gameBoard);
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const flagsUsed = GameLogic.amountFlagsUsed(board);

    setGameFlags(minesAmount - flagsUsed);
  }

  function handleOpenField(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.openField(board, row, column);

    const won = GameLogic.WonGame(board);
    const lose = GameLogic.hadExplosion(board);

    if (lose) {
      stopSound();
      setGameResult(GameResults.lose);
      console.log(`${GameResults.lose} - Que burro! Você perdeu!`);
      playSound(GameSounds.lose);
      GameLogic.showMines(board);
    }

    if (won) {
      stopSound();
      setGameResult(GameResults.won);
      console.log(`${GameResults.won} - Você venceu!`);
      playSound(GameSounds.won);
    }

    setGameBoard(board);
  }

  function handleSetFlag(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.toggleIsFlagged(board, row, column);

    setGameBoard(board);
  }

  function handleSelectDifficult(difficult: GameDifficult) {
    params.difficultLevel = difficult;
  }

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (gameBoard) {
      gameFlagsController();
    }
  }, [gameBoard]);

  return (
    <Container>
      <Header
        amountFlags={gameFlags}
        actionStart={initGame}
        actionSelectLevel={() => undefined}
      />
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
