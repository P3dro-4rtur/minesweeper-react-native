export interface MinesweeperAppList {
  Home: undefined;
  Game: undefined;
  Options: undefined;
  Contact: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MinesweeperAppList {}
  }
}
