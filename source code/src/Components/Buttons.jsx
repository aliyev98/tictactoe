import React from 'react'

function Buttons({startGame, nextRound, btnText, game}) {

    return (
        <div className='btns-tictactoe'>
            <button onClick={nextRound} className={game ? "next-round-active" : 'next-round'}>Next Round</button>
            <button onClick={startGame} className="start-finish">{btnText}</button>
        </div>
    )
}

export default Buttons