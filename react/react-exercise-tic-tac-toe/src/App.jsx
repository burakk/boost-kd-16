import { useState } from 'react'
import './App.css'
import styles from './assets/styles/TicTacToe.module.css'

function App() {


  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
      <Board />

    </div>
  )
}

function Board() {
  //oyuncunun hamleleri listes
  const [moves, setMoves] = useState(Array(9).fill());
  const [moveCount, setMoveCount] = useState(0);


  const currentPlayer = moveCount % 2 === 0 ? "X" : "O";

  const winner = checkWinner(moves);

  //1. tile tıklandığında
  //[ null, null ... ]
  //[ "x", "null"]
  //1. oyuncu x ise 
  function onMove(index) {

    if (moves[index] || winner) return;

    const newMoves = [...moves];
    newMoves[index] = currentPlayer;

    setMoves(newMoves);
    setMoveCount(moveCount + 1);

  }






  return (
    <>
      {winner && <p>Kazanan <strong>{winner}</strong></p>}
      <div className={styles.Board} >
        {moves.map((m, index) => <Tile key={index} content={m} index={index} onMove={onMove} />)}
      </div>
    </>
  )
}

function Tile({ content, index, onMove }) {
  function handleClick(e) {
    onMove(index);
  }
  return (
    <div className={styles.Tile} onClick={handleClick}>
      {content}
    </div>
  )
}


export default App


//["X", "X", "X" ]

function checkWinner(moves) {

  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winnerLines.length; i++) {
    //[0,1,2]
    /*
    const mA = moves[winnerLines[i][0]];
    const mB = moves[winnerLines[i][1]];
    const mC = moves[winnerLines[i][2]];
    */

    const [a, b, c] = winnerLines[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      return moves[a];
    }


  }

  return null;
}