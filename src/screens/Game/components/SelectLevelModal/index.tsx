import React, { useState } from "react";
import { GameDifficult } from "~/config/params";
import {
  Modal,
  Container,
  Title,
  ButtonLevel,
  LabelLevel,
  Level,
  LevelOptions,
} from "./styles";

interface ModalProps {
  actualDifficultLevel: GameDifficult;
  isVisible: boolean;
  onSelectAction: (difficult: GameDifficult) => void;
}

interface ButtonLevel {
  id: string;
  level: Level;
  difficult: GameDifficult;
  onPress: () => void;
}

export function SelectLevelModal(props: ModalProps) {
  const { isVisible, onSelectAction, actualDifficultLevel } = props;

  const ButtonsLevel: ButtonLevel[] = [
    {
      id: "0",
      level: "Easy",
      difficult: GameDifficult.easy,
      onPress: () => onSelectAction(GameDifficult.easy),
    },
    {
      id: "1",
      level: "Medium",
      difficult: GameDifficult.medium,
      onPress: () => onSelectAction(GameDifficult.medium),
    },
    {
      id: "2",
      level: "Hard",
      difficult: GameDifficult.hard,
      onPress: () => onSelectAction(GameDifficult.hard),
    },
    {
      id: "3",
      level: "VeryHard",
      difficult: GameDifficult.veryHard,
      onPress: () => onSelectAction(GameDifficult.veryHard),
    },
    {
      id: "4",
      level: "God",
      difficult: GameDifficult.god,
      onPress: () => onSelectAction(GameDifficult.god),
    },
  ];

  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Title>SELECT LEVEL</Title>
        <LevelOptions>
          {ButtonsLevel.map((option) => (
            <ButtonLevel
              isSelected={actualDifficultLevel === option.difficult}
              key={option.id}
              onPress={option.onPress}
            >
              <LabelLevel level={option.level}>
                {option.level === "VeryHard" ? "Very Hard" : option.level}
              </LabelLevel>
            </ButtonLevel>
          ))}
        </LevelOptions>
      </Container>
    </Modal>
  );
}
