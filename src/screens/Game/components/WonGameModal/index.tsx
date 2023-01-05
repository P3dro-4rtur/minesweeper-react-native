import React from "react";
import { useTheme } from "styled-components/native";
import { Trophy } from "phosphor-react-native";
import {
  Modal,
  Container,
  LabelResult,
  LabelContainer,
  Content,
  ContinueButton,
  ContinueButtonLabel,
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
      animationIn="lightSpeedIn"
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
    </Modal>
  );
}
