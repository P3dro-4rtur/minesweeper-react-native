import React from "react";
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

export function WonGameModal({ isVisible, onClose }: Props) {
  const theme = useTheme();

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="jello"
    >
      <Container>
        <LabelContainer>
          <Trophy size={60} weight="bold" color={theme.colors.white} />
          <LabelResult>CONGRATULATIONS</LabelResult>
        </LabelContainer>

        <Content>
          <ContinueButton onPress={onClose} activeOpacity={0.8}>
            <ContinueButtonLabel>continuar</ContinueButtonLabel>
          </ContinueButton>
        </Content>
      </Container>

      <TrophyContainer>
        <TrophyAnimated />
      </TrophyContainer>
    </Modal>
  );
}
