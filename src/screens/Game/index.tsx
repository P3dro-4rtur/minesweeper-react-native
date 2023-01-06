import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";
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
import { ActionsTimer } from "~/components/Timer";

export const Game: React.FC = () => {
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameFlags, setGameFlags] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);

  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameParams.difficultLevelDefault
  );

  const [actionsTimer, setActionsTimer] = useState<ActionsTimer>(
    ActionsTimer.stop
  );

  const [isWonGameModalVisible, setWonGameModalVisible] =
    useState<boolean>(false);

  const [isSelectLevelModalVisible, setIsSelectLevelModalVisible] =
    useState<boolean>(true);

  const GameSoundHook = useGameSound();

  function onCloseAppLoading() {
    const action = () => setAppIsLoading(false);
    setTimeout(action, 2000);
  }

  function initGame(difficult?: GameDifficult) {
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();
    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);
    GameSoundHook.stopSound();
    setGameBoard(board);
    setGameResult(GameResults.none);
    GameSoundHook.selectorPlaySoundByDifficult(difficult || gameDifficult);
    setActionsTimer(ActionsTimer.start);
  }

  function handleRestartOrStartNewGame(difficult: GameDifficult) {
    setActionsTimer(ActionsTimer.stop);
    setTimeout(() => initGame(difficult || gameDifficult), 1500);
    setAppIsLoading(true);
  }

  function onPlayerWonGame() {
    GameSoundHook.stopSound();

    setActionsTimer(ActionsTimer.pause);
    setWonGameModalVisible(true);
    setGameResult(GameResults.won);
    GameSoundHook.playSound(GameSounds.won);

    setTimeout(() => setWonGameModalVisible(true), 2500);
  }

  function onPlayerLoseGame(board: Board) {
    GameSoundHook.stopSound();
    setActionsTimer(ActionsTimer.pause);
    GameSoundHook.playSound(GameSounds.lose);
    GameLogic.showMines(board);
    setGameResult(GameResults.lose);
  }

  function gameFlagsController() {
    const board = GameLogic.cloneBoard(gameBoard);
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const flagsUsed = GameLogic.amountFlagsUsed(board);

    setGameFlags(minesAmount - flagsUsed);
  }

  function disableHardwareBackButton() {
    BackHandler.addEventListener("hardwareBackPress", () => true);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }

  function handleSelectDifficult(difficult: GameDifficult) {
    const playerIsAlreadyInGame = actionsTimer === ActionsTimer.start;

    setGameDifficult(difficult);
    setIsSelectLevelModalVisible(false);
    setActionsTimer(ActionsTimer.stop);
    GameSoundHook.stopSound();

    if (playerIsAlreadyInGame) {
      return handleRestartOrStartNewGame(difficult);
    }

    initGame(difficult);
  }

  function handleOpenField(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.openField(board, row, column);

    const won = GameLogic.WonGame(board);
    const lose = GameLogic.hadExplosion(board);

    if (lose) {
      onPlayerLoseGame(board);
    }

    if (won) {
      onPlayerWonGame();
    }

    setGameBoard(board);
  }

  function handleSetFlag(row: number, column: number) {
    const board = GameLogic.cloneBoard(gameBoard);
    GameLogic.toggleIsFlagged(board, row, column);

    setGameBoard(board);
  }

  useEffect(() => {
    disableHardwareBackButton();
  }, []);

  useEffect(() => {
    if (appIsLoading) onCloseAppLoading();
  }, [appIsLoading]);

  useEffect(() => {
    if (gameBoard) gameFlagsController();
  }, [gameBoard]);

  if (appIsLoading) return <LoadAnimated />;

  return (
    <React.Fragment>
      <Container>
        <Header
          amountFlags={gameFlags}
          actionsTimer={actionsTimer}
          getTime={(seconds) => console.log(seconds)}
          actionStart={() => handleRestartOrStartNewGame(gameDifficult)}
          actionSelectLevel={() => setIsSelectLevelModalVisible(true)}
        />
        <MineFieldContainer>
          <MineField
            board={gameBoard}
            disableFields={gameResult !== GameResults.none}
            onSetFlag={(row, column) => handleSetFlag(row, column)}
            onOpenField={(row, column) => handleOpenField(row, column)}
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
