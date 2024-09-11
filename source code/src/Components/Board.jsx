import React from 'react'
import Square from './Square'

function Board({squares, handleClick, button}) {



  return (
    <div className='board'>
      <Square button = {button} value={squares[0]} handleClick={() => handleClick(0)}/>
      <Square button = {button} value={squares[1]} handleClick={() => handleClick(1)}/>
      <Square button = {button} value={squares[2]} handleClick={() => handleClick(2)}/>
      <Square button = {button} value={squares[3]} handleClick={() => handleClick(3)}/>
      <Square button = {button} value={squares[4]} handleClick={() => handleClick(4)}/>
      <Square button = {button} value={squares[5]} handleClick={() => handleClick(5)}/>
      <Square button = {button} value={squares[6]} handleClick={() => handleClick(6)}/>
      <Square button = {button} value={squares[7]} handleClick={() => handleClick(7)}/>
      <Square button = {button} value={squares[8]} handleClick={() => handleClick(8)}/>
    </div>
  )
}

export default Board