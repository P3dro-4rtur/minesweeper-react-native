import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GameDifficult } from "~/config/params";
import {
  Modal,
  Container,
  Title,
  ButtonLevel,
  LabelLevel,
  Level,
  LevelOptions,
  ButtonClose,
  ButtonCloseLabel,
} from "./styles";

interface ModalProps {
  actualDifficultLevel: GameDifficult;
  isVisible: boolean;
  onSelectAction: (difficult: GameDifficult) => void;
  onClose: () => void;
}

interface ButtonLevel {
  id: string;
  level: Level;
  difficult: GameDifficult;
  onPress: () => void;
}

export const SelectLevelModal: React.FC<ModalProps> = (props) => {
  const { isVisible, onSelectAction, onClose, actualDifficultLevel } = props;
  const [idSelected, setIdSelected] = useState<string>("");

  const { t: translate } = useTranslation();

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

  function activeButtonById(id?: string) {
    setIdSelected(id ?? "");
  }

  function label(level: string) {
    return level === "VeryHard" ? "Very Hard" : level;
  }

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <Container>
        <ButtonClose onPress={onClose}>
          <ButtonCloseLabel>x</ButtonCloseLabel>
        </ButtonClose>

        <Title>{translate("screens.game.header.buttonFlag")}</Title>
        <LevelOptions>
          {ButtonsLevel.map(({ id, difficult, level, onPress }) => (
            <ButtonLevel
              key={id}
              activeOpacity={0.8}
              isActive={id === idSelected}
              onPressIn={() => activeButtonById(id)}
              onPressOut={() => [activeButtonById(), onPress()]}
              isSelected={actualDifficultLevel === difficult}
            >
              <LabelLevel level={level}>{label(level)}</LabelLevel>
            </ButtonLevel>
          ))}
        </LevelOptions>
      </Container>
    </Modal>
  );
};
