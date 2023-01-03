import React, { ReactNode } from "react";
import { GameSoundProvider } from "../useGameSound/context";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <GameSoundProvider>{children}</GameSoundProvider>;
}
