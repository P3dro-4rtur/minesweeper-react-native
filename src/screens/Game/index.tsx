import React, { useState, useEffect } from "react";
import { Board } from "@config/types&interfaces/";
import { GameParams, GameResults, GameDifficult } from "~/config/params";
import { GameLogic } from "~/config/logic";
import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { Header } from "../Game/components/Header";
import { MineField } from "./components/MineField";
import { Container, MineFieldContainer } from "./styles";
import { SelectLevelModal } from "./components/SelectLevelModal";

export const Game: React.FC = () => {
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameFlags, setGameFlags] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);
  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameParams.difficultLevelDefault
  );
  const [isSelectLevelModalVisible, setIsSelectLevelModalVisible] =
    useState<boolean>(false);

  const GameSoundHook = useGameSound();

  function initGame(difficult?: GameDifficult) {
    GameSoundHook.stopSound();

    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();
    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    setGameBoard(board);
    GameSoundHook.selectorPlaySoundByDifficult(difficult ?? gameDifficult);
  }

  async function onPlayerWonGame() {
    await GameSoundHook.playSound(GameSounds.won);
    console.log(`${GameResults.won} - Você venceu!`);
    setGameResult(GameResults.won);
  }

  async function onPlayerLoseGame() {
    await GameSoundHook.playSound(GameSounds.lose);
    console.log(`${GameResults.lose} - Que burro! Você perdeu!`);

    setGameResult(GameResults.lose);
  }

  function handleOpenField(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.openField(board, row, column);

    const won = GameLogic.WonGame(board);
    const lose = GameLogic.hadExplosion(board);

    if (lose) {
      GameSoundHook.stopSound();
      GameLogic.showMines(board);
      onPlayerLoseGame();
    }

    if (won) {
      GameSoundHook.stopSound();
      onPlayerWonGame();
    }

    setGameBoard(board);
  }

  function handleSelectDifficult(difficult: GameDifficult) {
    GameSoundHook.stopSound();
    setGameDifficult(difficult);
    setGameResult(GameResults.none);
    setIsSelectLevelModalVisible(false);

    initGame(difficult);
  }

  function handleSetFlag(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.toggleIsFlagged(board, row, column);

    setGameBoard(board);
  }

  function gameFlagsController() {
    const board = GameLogic.cloneBoard(gameBoard);
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const flagsUsed = GameLogic.amountFlagsUsed(board);

    setGameFlags(minesAmount - flagsUsed);
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
    <React.Fragment>
      <Container>
        <Header
          amountFlags={gameFlags}
          actionStart={() => initGame(gameDifficult)}
          actionSelectLevel={() => setIsSelectLevelModalVisible(true)}
        />
        <MineFieldContainer>
          <MineField
            board={gameBoard}
            onOpenField={(row, column) => handleOpenField(row, column)}
            onSetFlag={(row, column) => handleSetFlag(row, column)}
            disableFields={gameResult !== GameResults.none}
          />
        </MineFieldContainer>
      </Container>
      <SelectLevelModal
        actualDifficultLevel={gameDifficult}
        isVisible={isSelectLevelModalVisible}
        onSelectAction={handleSelectDifficult}
      />
    </React.Fragment>
  );
};
