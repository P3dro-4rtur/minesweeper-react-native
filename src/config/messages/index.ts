import { useTranslation } from "react-i18next";

type TypeMessage = "tip" | "general" | "curiosity";

interface Message {
  type: TypeMessage;
  title: string;
  message: string;
}

function GameMessages() {
  const { t: translate } = useTranslation();

  const titleTip = translate("messages.tip.title");
  const titleCuriosity = translate("messages.tip.title");

  const titleAbout = translate("general.about.title");
  const messageAbout = translate("general.about.message");

  const tipNumberFlag = translate("messages.tip.tipNumberFlags");
  const tipNumberOnFields = translate("messages.tip.tipNumberOnFields");
  const curiosityOrigin = translate("messages.curiosity.origin");

  const messages: Message[] = [
    {
      type: "tip",
      title: titleTip,
      message: tipNumberFlag,
    },
    {
      type: "tip",
      title: titleTip,
      message: tipNumberOnFields,
    },
    {
      type: "curiosity",
      title: titleCuriosity,
      message: curiosityOrigin,
    },
    {
      type: "general",
      title: titleAbout,
      message: messageAbout,
    },
  ];

  return { messages };
}

export { TypeMessage, Message, GameMessages };
