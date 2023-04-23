import React from "react";
import { HeaderDefault } from "~/components";
import { useTranslation } from "react-i18next";
import { comingSoon, noSignalTv } from "~/config/messages";
import { Container, WarningWrapper, WarningTitle, Warning } from "./styles";

export function About() {
  const { t: translate } = useTranslation();

  return (
    <Container>
      <HeaderDefault title={translate("screens.about.header")} />

      <WarningWrapper>
        <WarningTitle>{comingSoon}</WarningTitle>
        <Warning>{noSignalTv}</Warning>
      </WarningWrapper>
    </Container>
  );
}
