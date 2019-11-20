import React from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";
import Status from "./Status";
import styled from "@emotion/styled";

const Box = styled.div`
  width: ${props => 50 * Math.sqrt(props.size)}px;

  > * {
    width: 50px;
    height: 50px;
  }
`;

export default function Board({ gameSize }) {
  const [squares, setSquares] = React.useState(Array(gameSize).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(index) {
    if (winner || squares[index]) {
      return;
    }

    const squaresClone = [...squares];

    if (xIsNext) {
      squaresClone[index] = "X";
      setXIsNext(false);
    } else {
      squaresClone[index] = "O";
      setSquares(squaresClone);
      setXIsNext(true);
    }
    setSquares(squaresClone);
  }

  return (
    <div>
      <Status>{status}</Status>
      <Box size={gameSize}>
        {squares.map((square, index) => (
          <Square
            key={`Square-${index}`}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </Box>
    </div>
  );
}
