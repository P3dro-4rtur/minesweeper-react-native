import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { GameDifficult } from "../types&interfaces";

const totalWidth = Dimensions.get("window").width;
const totalHeight = Dimensions.get("window").height;

export const params = {
  dimensions: {
    blockSize: RFValue(30),
    borderSize: RFValue(5),
    fontSize: RFValue(15),
    headerRatio: 0.15,
  },

  difficultLevel: GameDifficult.easy,

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
