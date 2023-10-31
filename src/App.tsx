import { useState } from "react";
import Board from "./components/Board";
import Lottie from "lottie-react";
import winn from "./assets/win.json";

type SquareValue = "X" | "O" | null;

function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const style = {
    height: 200,
    widht: 100,
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <Lottie animationData={winn} loop={false} style={style} />
    </div>
  );
}

export default Game;
