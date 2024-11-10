import { useState } from "react";
import "./App.css";
import "./index.css";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  return (
    <main className="board">
      <h1>Gato Juego</h1>
      <section className="game">
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              isSelected={value !== null}
            >
              {value}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
