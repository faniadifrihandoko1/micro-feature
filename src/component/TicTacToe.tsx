import { useState } from "react";
import Navbar from "./Navbar";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares: (string | null)[]) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const onHandleClick = (i: number) => {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner " + `"${winner}"`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <Navbar />
      <div className=" mb-5  px-10  lg:px-24">
        <h1 className="text-center font-semibold text-3xl mt-4 font-poppins">
          Tic<span className="text-red-500">Tac</span>Toe
        </h1>
        <div className="flex justify-center gap-4 items-center">
          <button
            onClick={handleRefresh}
            className="bg-green-500 text-white p-2 mt-3 rounded-md hover:bg-blue-600"
          >
            Refresh
          </button>
        </div>
        <main>
          <div className="flex justify-center">
            <div className="py-5 my5">
              <div className="status my-2">{status}</div>
              <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(0)}
                  >
                    {squares[0]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(1)}
                  >
                    {squares[1]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(2)}
                  >
                    {squares[2]}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(3)}
                  >
                    {squares[3]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(4)}
                  >
                    {squares[4]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(5)}
                  >
                    {squares[5]}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(6)}
                  >
                    {squares[6]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(7)}
                  >
                    {squares[7]}
                  </button>
                  <button
                    className="bg-white p-6 rounded shadow-md square font-bold button"
                    onClick={() => onHandleClick(8)}
                  >
                    {squares[8]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
