export interface MinesweeperAppList {
  Home: undefined;
  Game: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MinesweeperAppList {}
  }
}
