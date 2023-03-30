import React from "react";
import { HeaderDefault } from "~/components";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function About() {
  const { t: translate } = useTranslation();
  return (
    <Container>
      <HeaderDefault title={translate("screens.about.header")} />
    </Container>
  );
}
