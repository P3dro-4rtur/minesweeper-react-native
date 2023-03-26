import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";

import { Board } from "@config/types&interfaces/";
import { GameLogic } from "@config/logic";
import { GameParams, GameResults, GameDifficult } from "~/config/params";

import { useGameSound } from "~/hooks/useGameSound";
import { GameSounds } from "~/hooks/useGameSound/context";

import { LoadAnimated } from "@components/index";
import { ActionsTimer } from "@components/Timer";

import {
  Header,
  MineField,
  WonGameModal,
  SelectLevelModal,
} from "./components/index";
import { Container, MineFieldContainer } from "./styles";

export const Game: React.FC = () => {
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);
  const [gameBoard, setGameBoard] = useState<Board>([]);
  const [gameFlags, setGameFlags] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResults>(GameResults.none);

  const [gameDifficult, setGameDifficult] = useState<GameDifficult>(
    GameDifficult.none
  );

  const [actionsTimer, setActionsTimer] = useState<ActionsTimer>(
    ActionsTimer.none
  );

  const [isWonGameModalVisible, setWonGameModalVisible] =
    useState<boolean>(false);

  const [isSelectLevelModalVisible, setIsSelectLevelModalVisible] =
    useState<boolean>(true);

  const GameSoundHook = useGameSound();
  const headerDisableStart = gameDifficult === GameDifficult.none;
  const mineFieldDisableFields = gameResult !== GameResults.none;

  function initGame(difficult: GameDifficult) {
    const rows = GameParams.getRowsAmount();
    const columns = GameParams.getColumnsAmount();
    const minesAmount = GameLogic.minesAmount(rows, columns, difficult);
    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    GameSoundHook.stopSound();
    GameSoundHook.selectorPlaySoundByDifficult(difficult);
    setActionsTimer(ActionsTimer.start);
    setGameResult(GameResults.none);
    setGameBoard(board);
  }

  function handleRestartOrStartNewGame(difficult: GameDifficult) {
    const callback = () => {
      initGame(difficult || gameDifficult);
      setActionsTimer(ActionsTimer.start);
    };

    setTimeout(callback, GameParams.getSecond(2));
    setActionsTimer(ActionsTimer.stop);
    setAppIsLoading(true);
  }

  async function onPlayerWonGame() {
    setActionsTimer(ActionsTimer.pause);
    GameSoundHook.stopSound();

    const action = () => {
      setGameResult(GameResults.won);
      setWonGameModalVisible(true);
    };

    await GameSoundHook.playSound(GameSounds.won).then(action);
  }

  async function onPlayerLoseGame(board: Board) {
    setActionsTimer(ActionsTimer.pause);
    GameSoundHook.stopSound();

    const endGame = () => {
      GameLogic.showMines(board);
      setGameResult(GameResults.lose);
    };

    await GameSoundHook.playSound(GameSounds.lose).then(endGame);
  }

  function gameFlagsController() {
    const board = GameLogic.cloneBoard(gameBoard);
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const flagsUsed = GameLogic.amountFlagsUsed(board);
    const howManyFlagsPlayerHave = minesAmount - flagsUsed;

    if (howManyFlagsPlayerHave >= 0) {
      setGameFlags(howManyFlagsPlayerHave);
    }
  }

  function controllerLoad() {
    if (appIsLoading) onCloseAppLoading();
  }

  function getTimeGame(seconds: number) {
    return seconds;
  }

  function disableHardwareBackButton() {
    const hardwareButton = "hardwareBackPress";
    const callback = () => true;

    BackHandler.addEventListener(hardwareButton, callback);
    return () => BackHandler.removeEventListener(hardwareButton, callback);
  }

  function onCloseAppLoading() {
    const action = () => setAppIsLoading(false);
    setTimeout(action, GameParams.getSecond(3));
  }

  function handleSelectDifficult(difficult: GameDifficult) {
    const playerIsAlreadyInGame = actionsTimer === ActionsTimer.start;
    const playerIsLoseGame = gameResult === GameResults.lose;

    setGameDifficult(difficult);
    setActionsTimer(ActionsTimer.stop);
    GameSoundHook.stopSound();

    if (gameDifficult === GameDifficult.none) {
      initGame(difficult);
      setIsSelectLevelModalVisible(false);
      return;
    }

    if (playerIsAlreadyInGame || playerIsLoseGame) {
      handleRestartOrStartNewGame(difficult);
      setIsSelectLevelModalVisible(false);
      return;
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

  function headerActionStartProp() {
    handleRestartOrStartNewGame(gameDifficult);
  }

  function headerActionSelectLevelProp() {
    setIsSelectLevelModalVisible(true);
  }

  function selectLevelModalOnCloseProp() {
    setIsSelectLevelModalVisible(false);
  }

  function wonGameModalOnCloseProp() {
    setWonGameModalVisible(false);
  }

  function effectControllerBoard() {
    return gameBoard && gameFlagsController();
  }

  useEffect(disableHardwareBackButton, []);
  useEffect(effectControllerBoard, [gameBoard]);
  useEffect(controllerLoad, [appIsLoading]);

  if (appIsLoading) return <LoadAnimated showLabel showMessage />;

  return (
    <React.Fragment>
      <Container>
        <Header
          getTime={getTimeGame}
          amountFlags={gameFlags}
          actionsTimer={actionsTimer}
          disableStart={headerDisableStart}
          actionStartButton={headerActionStartProp}
          actionSelectLevelButton={headerActionSelectLevelProp}
        />
        <MineFieldContainer>
          <MineField
            board={gameBoard}
            onSetFlag={handleSetFlag}
            onOpenField={handleOpenField}
            disableFields={mineFieldDisableFields}
          />
        </MineFieldContainer>
      </Container>

      <SelectLevelModal
        onClose={selectLevelModalOnCloseProp}
        actualDifficultLevel={gameDifficult}
        isVisible={isSelectLevelModalVisible}
        onSelectAction={handleSelectDifficult}
      />
      <WonGameModal
        onClose={wonGameModalOnCloseProp}
        isVisible={isWonGameModalVisible}
      />
    </React.Fragment>
  );
};
