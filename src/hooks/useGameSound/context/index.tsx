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
  gameSound: Audio.Sound | undefined;
  playSound: (sound: GameSounds) => Promise<void>;
  pauseSound: () => Promise<void>;
  stopSound: () => Promise<void>;
  selectorPlaySoundByDifficult: (difficult: GameDifficult) => Promise<void>;
  muteModeIsActive: boolean;
  toggleMuteMode: (bool?: boolean) => void;
}

interface GameSoundProviderProps {
  children: ReactNode;
}

const initialState = {} as GameSoundContextData;

const GameSoundContext = createContext<GameSoundContextData>(initialState);

function GameSoundProvider({ children }: GameSoundProviderProps) {
  const [gameSound, setGameSound] = useState<Audio.Sound>();
  const [muteModeIsActive, setMuteModeIsActive] = useState(true);

  console.log(muteModeIsActive);

  const contextValueData = {
    gameSound,
    playSound,
    pauseSound,
    stopSound,
    toggleMuteMode,
    muteModeIsActive,
    selectorPlaySoundByDifficult,
  };

  async function playSound(soundSelected: GameSounds = GameSounds.theme) {
    if (muteModeIsActive) return;

    const { sound } = await Audio.Sound.createAsync(soundSelected);
    setGameSound(sound);
    await sound.playAsync();

    if (soundSelected !== GameSounds.lose || soundSelected !== GameSounds.won) {
      await sound.setIsLoopingAsync(true);
    }
  }

  async function pauseSound() {
    await gameSound?.pauseAsync();
    await gameSound?.setIsLoopingAsync(false);
  }

  async function stopSound() {
    await gameSound?.setIsLoopingAsync(false);
    await gameSound?.stopAsync();
    await gameSound?.unloadAsync();
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

  function toggleMuteMode(bool?: boolean) {
    setMuteModeIsActive((actualState) => bool ?? !actualState);
  }

  React.useEffect(() => {
    if (muteModeIsActive) {
      stopSound();
    }

    if (!muteModeIsActive) {
      playSound();
    }
  }, [muteModeIsActive]);

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
