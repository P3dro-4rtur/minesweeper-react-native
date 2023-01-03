import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Audio } from "expo-av";
import gameMusic from "~/assets/sounds/theme.mp3";

interface GameSoundContextData {
  gameSoundLoading: boolean;
  playSound: () => void;
}

interface GameSoundProviderProps {
  children: ReactNode;
}

const initialState = {} as GameSoundContextData;

const GameSoundContext = createContext<GameSoundContextData>(initialState);

function GameSoundProvider({ children }: GameSoundProviderProps) {
  const [gameSoundLoading, setGameSoundLoading] = useState(false);
  const [gameSound, setGameSound] = useState<Audio.Sound>();
  const valueData = { gameSoundLoading, playSound };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(gameMusic);

    setGameSound(sound);

    await sound.playAsync();
  }

  return (
    <GameSoundContext.Provider value={valueData}>
      {children}
    </GameSoundContext.Provider>
  );
}

export { GameSoundContext, GameSoundContextData, GameSoundProvider };
