import { useContext } from "react";
import { GameSoundContextData, GameSoundContext } from "./context";

export function useGameSound(): GameSoundContextData {
  const context = useContext(GameSoundContext);
  return context;
}
