import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Flag } from "../Flag";
import { Mine } from "../Mine";
import { Block, TypeStyledField, AmountOfNearbyMines } from "./styles";

interface FieldProps {
  isMined?: boolean;
  isOpened?: boolean;
  isExploded?: boolean;
  isFlagged?: boolean;
  nearbyMines?: number;
  onOpen?: () => void;
  onSetFlag?: () => void;
}

export function Field(props: FieldProps) {
  const {
    isMined,
    isOpened,
    isExploded,
    isFlagged,
    nearbyMines = 0,
    onOpen,
    onSetFlag,
  } = props;

  function selectorTypeField(): TypeStyledField {
    if (isOpened && !isExploded) return "opened";
    if (isOpened && isExploded) return "exploded";
    if (isOpened && isMined) return "regular";
    if (!isOpened && isFlagged) return "regular";
    if (!isOpened && !isExploded) return "regular";

    return "regular";
  }

  function LabelNearbyMines(): JSX.Element | null {
    const condition = isOpened && !isMined && nearbyMines > 0;

    if (condition) {
      return (
        <AmountOfNearbyMines nearbyMines={nearbyMines}>
          {nearbyMines}
        </AmountOfNearbyMines>
      );
    }

    return null;
  }

  function FieldMined(): JSX.Element | null {
    const condition = isOpened && (isMined || isExploded);

    if (condition) return <Mine />;

    return null;
  }

  function FieldFlagged(): JSX.Element | null {
    const condition = !isOpened && isFlagged;

    if (condition) return <Flag />;

    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSetFlag}>
      <Block type={selectorTypeField()}>
        <LabelNearbyMines />
        <FieldMined />
        <FieldFlagged />
      </Block>
    </TouchableWithoutFeedback>
  );
}
