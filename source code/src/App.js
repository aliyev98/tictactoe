import React, { useState } from 'react'
import './Styles/styles.scss'
import Info from './Components/Info'
import Board from './Components/Board'
import Buttons from './Components/Buttons'

function App() {

  // states

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState("-");
  const [xStatus, setXStatus] = useState("-");
  const [oStatus, setOStatus] = useState("-");
  const [btnText, setBtnText] = useState('Start Game');
  const [button, setButton] = useState(false);
  const [game, setGame] = useState(false);
  const [isX, setIsX] = useState(true);
  const [tie, setTie] = useState(false);
  const [win, setWin] = useState(false);
  const [winner, SetWinner] = useState(null);

  // functions

  const startGame = () => {
    if (!game) {
      setGame(true)
      setWin(false)
      setTie(false)
      setButton(true)
      setBtnText("Finish Game")
      setXStatus(0)
      setOStatus(0)
      setGameStatus("X's Turn!")
    } else {
      finishGame();
    }
  }

  const finishGame = () => {
    setGame(false)
    setIsX(true)
    setBtnText("Start Game");
    setButton(false)

    if (xStatus >> oStatus) {
      setGameStatus("Game Over: X Won!")
    }
    else if (oStatus >> xStatus) {
      setGameStatus("Game Over: O Won!")
    }
    else {
      setGameStatus("Game Over: Tie - Tie!")
    }

    setTimeout(() => {
      setXStatus('-')
      setOStatus('-')
      setGameStatus('-')
      clearBoard()
    }, 1000);

  }

  const nextRound = () => {
    clearBoard()
    setIsX(true)
    setGameStatus("X's Turn!")
    setWin(false)
    setTie(false)
    setButton(true)
  }

  const changeTurn = () => {
    if (isX) {
      setIsX(false)
      setGameStatus("O's Turn!")
    }
    else {
      setIsX(true)
      setGameStatus("X's Turn!")

    }
  }

  const clearBoard = () => {
    setSquares(Array(9).fill(null))
  }


  const checkWin = () => {
    const row1 = squares[0] === squares[1] && squares[0] === squares[2] && squares[0] !== null
    const row2 = squares[3] === squares[4] && squares[3] === squares[5] && squares[3] !== null
    const row3 = squares[6] === squares[7] && squares[6] === squares[8] && squares[6] !== null
    const col1 = squares[0] === squares[3] && squares[0] === squares[6] && squares[0] !== null
    const col2 = squares[1] === squares[4] && squares[1] === squares[7] && squares[1] !== null
    const col3 = squares[2] === squares[5] && squares[2] === squares[8] && squares[2] !== null
    const dig1 = squares[0] === squares[4] && squares[0] === squares[8] && squares[0] !== null
    const dig2 = squares[2] === squares[4] && squares[2] === squares[6] && squares[2] !== null

    if (row1 || row2 || row3 || col1 || col2 || col3 || dig1 || dig2) {

      setWin(true)
      setButton(false)

      const winner = isX ? "X" : "O";
      SetWinner(winner);
      setGameStatus(`${winner} wins!`);

      if (winner === "X") {
        setXStatus((prevStatus) => prevStatus + 1);
      } else {
        setOStatus((prevStatus) => prevStatus + 1);
      }
    }


  }

  const checkTie = () => {
    if (squares.every((square) => square !== null) && !win) {
      setTie(true);
      setButton(false)
      setGameStatus("Tie - Tie");
    }
  }

  const handleClick = (i) => {
    if (squares[i] === null) {
      squares[i] = isX ? 'X' : "O";
      changeTurn()
      setSquares(squares);
      checkWin()
      checkTie()
    }
    else {
      setGameStatus("This area is Full..!")
      setTimeout(() => {
        if (isX) {
          setGameStatus("X's Turn!")
        }
        else {
          setGameStatus("O's Tunr!")
        }
      }, 500);
    }

  }

  return (
    <div className='container'>

      <span className='header'> Tic Tac Toe</span>

      <Info
        gameStatus={gameStatus}
        xStatus={xStatus}
        oStatus={oStatus} />

      <Board
        button={button}
        squares={squares}
        handleClick={handleClick}
        setGameStatus={setGameStatus}
        setXStatus={setXStatus}
        setOStatus={setOStatus} />

      <Buttons
        game={game}
        startGame={startGame}
        btnText={btnText}
        nextRound={nextRound} />

    </div>
  )
}

export default App