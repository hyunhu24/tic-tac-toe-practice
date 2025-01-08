import React, { useState } from "react";
import Square from "./Square";

const Board = ({value, isNext, onPlay}) => {

    const handleClick = (i) =>{
        if(winnerHandle(value) || value[i]){
            return;
        }

        const nextSquare = value.slice();

        if(!isNext){
            nextSquare[i] = "X";
        }else{
            nextSquare[i] = "O";
        }

        onPlay(nextSquare);
    }
    
    let winner = winnerHandle(value);
    let status;

    if(winner){
        status = "Winner is " + winner + " !!!";
    }else{
        status = "Player is " + (!isNext ? "X" : "O") + " !!!";
    }

    return(
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={value[0]} handleClick={() => handleClick(0)}/>
                <Square value={value[1]} handleClick={() => handleClick(1)}/>
                <Square value={value[2]} handleClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={value[3]} handleClick={() => handleClick(3)}/>
                <Square value={value[4]} handleClick={() => handleClick(4)}/>
                <Square value={value[5]} handleClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={value[6]} handleClick={() => handleClick(6)}/>
                <Square value={value[7]} handleClick={() => handleClick(7)}/>
                <Square value={value[8]} handleClick={() => handleClick(8)}/>
            </div>
        </>
    )
}

function winnerHandle(val){
    let winnerLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < winnerLines.length - 1; i++){
        const [a,b,c] = winnerLines[i];
        if(val[a] && val[a] === val[b] && val[b] === val[c]){
            return val[a];
        }
    }

    return null;
}

export default Board;