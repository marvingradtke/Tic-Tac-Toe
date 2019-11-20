import { calculateWinner } from "./helpers";

it("calculates winner with 9 squares"),
  () => {
    const squares = ["x", "x", "x", "o", null, "o", null, null, null];
    const winner = calculateWinner(squares);

    expect(winner).toBe("x");
  };
