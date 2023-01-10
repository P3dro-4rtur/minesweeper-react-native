import { MinesweeperAppList } from "~/routes/app.stack.routes";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends MinesweeperAppList {}
  }
}
