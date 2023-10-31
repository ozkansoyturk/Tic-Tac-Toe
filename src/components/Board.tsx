import Square from "./Square";

type SquareValue = "O" | "X" | null;

interface Props {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}

function Board({ xIsNext, squares, onPlay }: Props) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "0");
  }

  return (
    <>
      <div className="complete-board debug">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;

function calculateWinner(squares: (null | string)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //INFO: Les différentes manières d'itérer sur un array :

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  /* Pourquoi répeter deux fois "squares[a] && squares[a]" ?
     La double vérification squares[a] && squares[a] est nécessaire pour s'assurer que la case à la position a du tableau squares est à la fois non nulle 
     (c'est-à-dire qu'elle contient une valeur) et qu'elle est égale aux cases b et c.
     
     La première partie de l'expression squares[a] vérifie si la case a contient une valeur non nulle, c'est-à-dire si elle n'est pas vide. 
     Si cette condition n'est pas remplie, alors il n'est pas possible d'avoir une ligne gagnante, car l'une des cases est vide.
     
     La deuxième partie de l'expression squares[a] === squares[b] && squares[a] === squares[c] vérifie si les trois cases a, b et c contiennent la même valeur, 
     ce qui est nécessaire pour qu'une ligne soit gagnante.
     
     En combinant les deux parties, on s'assure que la case a n'est pas vide et qu'elle est égale aux cases b et c, ce qui signifie qu'il y a une ligne gagnante. 
     C'est pourquoi ces deux conditions sont nécessaires pour déterminer un gagnant dans le morpion.
       */
}
