import React, { createContext, useState, ReactNode } from "react";
import { Audio } from "expo-av";

import { GameDifficult } from "~/config/params";

import themeSound from "~/assets/sounds/theme.mp3";
import wonSound from "~/assets/sounds/won-game.mp3";
import loseSound from "~/assets/sounds/lose-game-over.mp3";
import easySound from "~/assets/sounds/easy.mp3";
import mediumSound from "~/assets/sounds/medium.mp3";
import hardSound from "~/assets/sounds/hard.mp3";
import veryHardSound from "~/assets/sounds/very-hard.mp3";
import godSound from "~/assets/sounds/god.mp3";

enum GameSounds {
  theme = themeSound,
  won = wonSound,
  lose = loseSound,
  easy = easySound,
  medium = mediumSound,
  hard = hardSound,
  veryHard = veryHardSound,
  god = godSound,
}

interface GameSoundContextData {
  muteModeIsActive: boolean;
  gameSound: Audio.Sound | undefined;
  soundSelected: GameSounds | undefined;

  playSound: (sound?: GameSounds) => Promise<void>;
  pauseSound: () => Promise<void>;
  stopSound: () => Promise<void>;
  toggleIsMuteModeActive: () => void;
  enableMuteMode: () => void;
  disableMuteMode: (sound?: GameSounds) => void;
  selectorPlaySoundByDifficult: (difficult: GameDifficult) => Promise<void>;
}

interface GameSoundProviderProps {
  children: ReactNode;
}

const initialState = {} as GameSoundContextData;

const GameSoundContext = createContext<GameSoundContextData>(initialState);

function GameSoundProvider({ children }: GameSoundProviderProps) {
  const [gameSound, setGameSound] = useState<Audio.Sound>();
  const [muteModeIsActive, setMuteModeIsActive] = useState(true);
  const [soundSelected, setSoundSelected] = useState<GameSounds>();

  const contextValueData: GameSoundContextData = {
    gameSound,
    soundSelected,
    muteModeIsActive,
    playSound,
    pauseSound,
    stopSound,
    toggleIsMuteModeActive,
    enableMuteMode,
    disableMuteMode,
    selectorPlaySoundByDifficult,
  };

  async function playSound(soundSelected: GameSounds = GameSounds.theme) {
    try {
      if (muteModeIsActive) return;

      const { sound } = await Audio.Sound.createAsync(soundSelected);

      setGameSound(sound);
      setSoundSelected(soundSelected);

      sound.playAsync();
    } catch (error) {
      console.log("#1 aqui");
      throw error;
    }
  }

  async function pauseSound() {
    try {
      await gameSound?.pauseAsync();
      await gameSound?.setIsLoopingAsync(false);
    } catch (error) {
      throw error;
    }
  }

  async function stopSound() {
    try {
      await gameSound?.setIsLoopingAsync(false);
      await gameSound?.stopAsync();
      setGameSound(undefined);
      await gameSound?.unloadAsync();
    } catch (error) {
      throw error;
    }
  }

  async function selectorPlaySoundByDifficult(difficult: GameDifficult) {
    switch (difficult) {
      case GameDifficult.easy:
        return await playSound(GameSounds.easy);

      case GameDifficult.medium:
        return await playSound(GameSounds.medium);

      case GameDifficult.hard:
        return await playSound(GameSounds.hard);

      case GameDifficult.veryHard:
        return await playSound(GameSounds.veryHard);

      case GameDifficult.god:
        return await playSound(GameSounds.god);

      default:
        return playSound(GameSounds.medium);
    }
  }

  function toggleIsMuteModeActive() {
    setMuteModeIsActive((actualState) => !actualState);
  }

  function enableMuteMode() {
    stopSound();
    setMuteModeIsActive(true);
    setGameSound(undefined);
  }

  function disableMuteMode(sound?: GameSounds) {
    setMuteModeIsActive(false);
    playSound(sound || GameSounds.theme);
  }

  function controllerSoundGame() {
    if (muteModeIsActive) {
      stopSound();
      return;
    }

    if (!muteModeIsActive && !gameSound) {
      playSound(GameSounds.theme);
      return;
    }

    if (!muteModeIsActive && !!gameSound) {
      playSound(GameSounds.theme);
      return;
    }
  }

  function controllerLoop() {
    const condition =
      soundSelected === GameSounds.lose || soundSelected === GameSounds.won;

    if (condition) {
      gameSound?.setIsLoopingAsync(false);
      return;
    }

    if (!condition) {
      gameSound?.setIsLoopingAsync(true);
      return;
    }
  }

  React.useEffect(controllerSoundGame, [muteModeIsActive]);
  React.useEffect(controllerLoop, [soundSelected, gameSound]);

  return (
    <GameSoundContext.Provider value={contextValueData}>
      {children}
    </GameSoundContext.Provider>
  );
}

export {
  GameSounds,
  GameSoundContext,
  GameSoundProvider,
  GameSoundContextData,
};
