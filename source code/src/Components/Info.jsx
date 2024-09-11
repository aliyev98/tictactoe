import React from 'react'

function Info({gameStatus, xStatus, oStatus}) {
    return (
        <div className="game-info">
            <div className="x-score">
                <span style={{fontSize:"45px" }}>X</span>
                <span style={{fontSize:"25px"}}>{xStatus}</span>
            </div>
            <div className="game-status">
                <span style={{fontSize:"25px"}}>Game Status</span>
                <span style={{fontSize:"15px"}}>{gameStatus}</span>

            </div>
            <div className="o-score">
                <span style={{fontSize:"45px" }}>O</span>
                <span style={{fontSize:"25px"}}>{oStatus}</span>
            </div>
        </div>
    )
}

export default Info