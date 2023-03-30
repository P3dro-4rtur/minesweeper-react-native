import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderDefault } from "~/components";
import { Container } from "./styles";

export function Score() {
  const { t: translate } = useTranslation();
  return (
    <Container>
      <HeaderDefault title={translate("screens.about.header")} />
    </Container>
  );
}
