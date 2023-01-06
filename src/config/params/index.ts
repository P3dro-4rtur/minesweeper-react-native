import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

enum GameResults {
  none = "none",
  won = "Won",
  lose = "Lose",
}

enum GameDifficult {
  none = 0,
  easy = 0.1,
  medium = 0.2,
  hard = 0.4,
  veryHard = 0.5,
  god = 0.6,
}

const totalWidth = Dimensions.get("window").width;
const totalHeight = Dimensions.get("window").height;

const GameParams = {
  dimensions: {
    blockSize: RFValue(30),
    borderSize: RFValue(5),
    fontSize: RFValue(15),
    headerRatio: 0.15,
  },

  second: 1000,
  difficultLevelDefault: GameDifficult.medium,

  getSecond(howManySeconds: number) {
    return this.second * howManySeconds;
  },

  getColumnsAmount() {
    const totalBlocksHorizontal = Math.floor(
      totalWidth / this.dimensions.blockSize
    );
    return totalBlocksHorizontal;
  },

  getRowsAmount() {
    const boardHeight = totalHeight * (1 - this.dimensions.headerRatio);
    const totalBlocksVertical = Math.floor(
      boardHeight / this.dimensions.blockSize
    );
    return totalBlocksVertical;
  },
};

export { GameParams, GameDifficult, GameResults };
