import React from "react";
import { useTranslation } from "react-i18next";
import { Trophy } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { TrophyAnimated } from "~/components/TrophyAnimated";
import {
  Modal,
  Container,
  LabelResult,
  LabelContainer,
  Content,
  ContinueButton,
  ContinueButtonLabel,
  TrophyContainer,
} from "./styles";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export const WonGameModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const theme = useTheme();
  const { t: translate } = useTranslation();

  return (
    <Modal
      animationIn="jello"
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <Container>
        <LabelContainer>
          <Trophy size={60} weight="bold" color={theme.colors.white} />
          <LabelResult>
            {translate("screens.game.wonGameModal.result")}
          </LabelResult>
        </LabelContainer>

        <Content>
          <ContinueButton onPress={onClose} activeOpacity={0.8}>
            <ContinueButtonLabel>
              {translate("screens.game.wonGameModal.continue")}
            </ContinueButtonLabel>
          </ContinueButton>
        </Content>
      </Container>

      <TrophyContainer>
        <TrophyAnimated />
      </TrophyContainer>
    </Modal>
  );
};
