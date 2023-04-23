import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderDefault } from "~/components";
import { Container, WarningTitle, WarningWrapper, Warning } from "./styles";
import { comingSoon, noSignalTv } from "~/config/messages";

export function Instructions() {
  const { t: translate } = useTranslation();
  return (
    <Container>
      <HeaderDefault title={translate("screens.instructions.header")} />

      <WarningWrapper>
        <WarningTitle>{comingSoon}</WarningTitle>
        <Warning>{noSignalTv}</Warning>
      </WarningWrapper>
    </Container>
  );
}
