import React from "react";
import { Container, CoreMine, LineMine } from "./styles";

export const Mine: React.FC = () => {
  function RotateLine(rotate: "45deg" | "90deg" | "135deg") {
    return {
      transform: [{ rotate: rotate }],
    };
  }

  return (
    <Container>
      <CoreMine />
      <LineMine />
      <LineMine style={RotateLine("45deg")} />
      <LineMine style={RotateLine("90deg")} />
      <LineMine style={RotateLine("135deg")} />
    </Container>
  );
};
