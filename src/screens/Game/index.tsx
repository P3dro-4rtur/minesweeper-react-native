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

  function initGame(difficult: GameDifficult) {
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();
    const minesAmount = GameLogic.minesAmount(rows, columns, difficult);
    const board = GameLogic.createMinedBoard(rows, columns, minesAmount);

    GameSoundHook.stopSound();
    GameSoundHook.selectorPlaySoundByDifficult(difficult);
    setActionsTimer(ActionsTimer.start);
    setGameResult(GameResults.none);
    setGameBoard(board);
  }

  function handleRestartOrStartNewGame(difficult: GameDifficult) {
    setTimeout(() => {
      initGame(difficult || gameDifficult);
      setActionsTimer(ActionsTimer.start);
    }, GameParams.getSecond(2));
    setActionsTimer(ActionsTimer.stop);
    setAppIsLoading(true);
  }

  function onPlayerWonGame() {
    setGameResult(GameResults.won);
    setActionsTimer(ActionsTimer.pause);
    GameSoundHook.stopSound();
    GameSoundHook.playSound(GameSounds.won);

    setTimeout(() => setWonGameModalVisible(true), GameParams.second);
  }

  function onPlayerLoseGame(board: Board) {
    GameSoundHook.stopSound();
    GameSoundHook.playSound(GameSounds.lose);
    setActionsTimer(ActionsTimer.pause);
    GameLogic.showMines(board);
    setGameResult(GameResults.lose);
  }

  function gameFlagsController() {
    const board = GameLogic.cloneBoard(gameBoard);
    const columns = GameParams.getColumnsAmount();
    const rows = GameParams.getRowsAmount();

    const minesAmount = GameLogic.minesAmount(rows, columns, gameDifficult);
    const flagsUsed = GameLogic.amountFlagsUsed(board);
    const howManyFlagsPlayerHave = minesAmount - flagsUsed;

    setGameFlags(howManyFlagsPlayerHave);
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
    setIsSelectLevelModalVisible(false);
    setActionsTimer(ActionsTimer.stop);
    GameSoundHook.stopSound();

    if (playerIsAlreadyInGame || playerIsLoseGame) {
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

  useEffect(() => disableHardwareBackButton(), []);
  useEffect(() => gameBoard && gameFlagsController(), [gameBoard]);
  useEffect(() => {
    if (appIsLoading) onCloseAppLoading();
  }, [appIsLoading]);

  if (appIsLoading) return <LoadAnimated showLabel />;

  return (
    <React.Fragment>
      <Container>
        <Header
          amountFlags={gameFlags}
          actionsTimer={actionsTimer}
          getTime={(seconds) => getTimeGame(seconds)}
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
        isVisible={isSelectLevelModalVisible}
        actualDifficultLevel={gameDifficult}
        onClose={() => setIsSelectLevelModalVisible(false)}
        onSelectAction={(difficultSelected) =>
          handleSelectDifficult(difficultSelected)
        }
      />
      <WonGameModal
        isVisible={isWonGameModalVisible}
        onClose={() => setWonGameModalVisible(false)}
      />
    </React.Fragment>
  );
};
