type TypeMessage = "tip" | "general" | "curiosity";

interface Message {
  type: TypeMessage;
  title: string;
  message: string;
}

const messages: Message[] = [
  {
    type: "tip",
    title: "Tip",
    message:
      "The number of available flags is the same as the number of mines on the field.",
  },
  {
    type: "tip",
    title: "Tip",
    message: "The numbers on fields, denote a quantity of neighbors mines.",
  },
  {
    type: "curiosity",
    title: "Curiosity",
    message: "Minesweeper has been created by Robert Donner in 1989.",
  },
  {
    type: "general",
    title: "This project...",
    message: "...has been create for study purposes and not for profit.",
  },
];

export { TypeMessage, Message, messages };
