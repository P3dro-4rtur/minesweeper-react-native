import React, { useState, useEffect } from "react";
import { Board } from "@config/types&interfaces/";
import { GameParams, GameResults, GameDifficult } from "~/config/params";
import { GameLogic } from "~/config/logic";
import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";
import { LoadAnimated } from "~/components/LoadAnimated";
import { Header } from "../Game/components/Header";
import { MineField } from "./components/MineField";
import { WonGameModal } from "./components/WonGameModal";
import { SelectLevelModal } from "./components/SelectLevelModal";
import { Container, MineFieldContainer } from "./styles";

export const Game: React.FC = () => {
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameFlags, setGameFlags] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);
  const [isWonGameModalVisible, setWonGameModalVisible] =
    useState<boolean>(false);

  const [isSelectLevelModalVisible, setIsSelectLevelModalVisible] =
    useState<boolean>(true);

  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameParams.difficultLevelDefault
  );

  const GameSoundHook = useGameSound();

  function appLoading() {
    const action = () => setAppIsLoading(false);
    setTimeout(action, 2000);
  }

  function initGame(difficult?: GameDifficult) {
    GameSoundHook.stopSound();

    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();
    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    setGameBoard(board);
    setGameResult(GameResults.none);
    GameSoundHook.selectorPlaySoundByDifficult(difficult ?? gameDifficult);
  }

  function onPlayerWonGame() {
    GameSoundHook.playSound(GameSounds.won);
    setGameResult(GameResults.won);
    setWonGameModalVisible(true);
  }

  function onPlayerLoseGame() {
    GameSoundHook.playSound(GameSounds.lose);
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
    appLoading();
  }, []);

  useEffect(() => {
    if (gameBoard) {
      gameFlagsController();
    }
  }, [gameBoard]);

  if (appIsLoading) return <LoadAnimated />;

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
        onClose={() => setIsSelectLevelModalVisible(false)}
      />
      <WonGameModal
        isVisible={isWonGameModalVisible}
        onClose={() => setWonGameModalVisible(false)}
      />
    </React.Fragment>
  );
};
