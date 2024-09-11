import React from 'react'

function Square({value, handleClick, button}) {
  return (
    <button onClick={handleClick} className={button ? "btn-square-active" : 'btn-square'}>
      {value}
    </button>
  )
}

export default Square