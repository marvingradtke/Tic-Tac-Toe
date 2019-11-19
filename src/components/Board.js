import React from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
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
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
