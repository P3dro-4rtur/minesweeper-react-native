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

/* export const noSignalTv = `
    o                   o
    \\               __/
     \\___          /
         \\__    __/
            \\  /
 ____________\\/____________
/   ____________________   \\
|  /__/  \\__   \\__/  \\__\\  |
| |    __   \\__    __   \\| |
| |\\__/  \\__   \\__/  \\__ | |
| |    __   \\__    __   \\| |
| |\\__/  \\__   \\__/  \\__ | |
| |    __   \\__    __   \\| |
| |\\__/  \\__   \\__/  \\__ | |
| |    __   \\__    __   \\| |
| |\\__/  \\__   \\__/  \\__ | |
|  \\________\\___________/  |
|                 _   _    |
|                (|) (/)   |
\\_________________________/
    "--"           "--"
`;*/

export const comingSoon = `
     _____                _                _____                   
    / ____|              (_)              / ____|                  
    | |     ___  _ __ ___  _ _ __   __ _  | (___   ___   ___  _ __  
    | |    / _ \\| '_ ' _ \\| | '_ \\ / _' |  \\___ \\ / _ \\ / _ \\| '_ \\ 
    | |___| (_) | | | | | | | | | | (_| |  ____) | (_) | (_) | | | |
     \\_____\\___/|_| |_| |_|_|_| |_|\\__, | |_____/ \\___/ \\___/|_| |_|
                                    __/ |                           
                                    |___/                    
`;

export const noSignalTv = `


     ,---------------------------,
     |  /---------------------\\  |
     | |                       | |
     | |  Under construction   | |
     | |      Coming soon      | |
     | |                       | |
     | |                       | |
     |  \\_____________________/  |
     |___________________________|
     ,---\\_____     []     _______/------,
     /         /______________\\           /|
    /___________________________________ /  | ___
    |                                   |   |    )
    |  _ _ _                 [-------]  |   |   (
    |  o o o                 [-------]  |  /    _)_
    |__________________________________ |/     /  /
  /-------------------------------------/|    ( )/
 /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

export { TypeMessage, Message, GameMessages };
