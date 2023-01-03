import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Audio } from "expo-av";

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
  playSound: (sound: GameSounds) => void;
  pauseSound: () => void;
  stopSound: () => void;
}

interface GameSoundProviderProps {
  children: ReactNode;
}

const initialState = {} as GameSoundContextData;

const GameSoundContext = createContext<GameSoundContextData>(initialState);

function GameSoundProvider({ children }: GameSoundProviderProps) {
  const [gameSound, setGameSound] = useState<Audio.Sound>();
  const valueData = { gameSound, playSound, pauseSound, stopSound };

  async function playSound(soundSelected: GameSounds = GameSounds.theme) {
    const { sound } = await Audio.Sound.createAsync(soundSelected);
    setGameSound(sound);

    await sound.playAsync();
  }

  async function pauseSound() {
    return gameSound?.pauseAsync();
  }

  async function stopSound() {
    return gameSound?.stopAsync();
  }

  return (
    <GameSoundContext.Provider value={valueData}>
      {children}
    </GameSoundContext.Provider>
  );
}

export {
  GameSoundContext,
  GameSoundContextData,
  GameSoundProvider,
  GameSounds,
};
