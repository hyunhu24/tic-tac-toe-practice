import React, { useState } from "react";
import Square from "./Square";

const Board = ({value, isNext, onPlay}) => {
   
    const handleClick = (i) => {
        if(winnerHandler(value) || value[i]){
            return;
        }

        const nextValue = value.slice();

        if(isNext){
            nextValue[i] = "X";
        }else{
            nextValue[i] = "O";
        }

        onPlay(nextValue);
    }

    let winner = winnerHandler(value);
    let status;
    
    if(winner){
        status = "Winner is : " + winner + " !!!";
    }else{
        status = "Now Player is : " + (isNext ? "X" : "O") + " !!!";
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
};

function winnerHandler(value){
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(value[a] && value[a] === value[b] && value[b] === value[c]){
            return value[a];
        }
    }
    
    return null;
}

export default Board;