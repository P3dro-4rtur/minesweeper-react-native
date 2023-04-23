import React from "react";
import { HeaderDefault } from "~/components";
import { useTranslation } from "react-i18next";
import { comingSoon, noSignalTv } from "~/config/messages";
import { Container, Warning, WarningTitle, WarningWrapper } from "./styles";

export function Score() {
  const { t: translate } = useTranslation();
  return (
    <Container>
      <HeaderDefault title={translate("screens.score.header")} />

      <WarningWrapper>
        <WarningTitle>{comingSoon}</WarningTitle>
        <Warning>{noSignalTv}</Warning>
      </WarningWrapper>
    </Container>
  );
}
