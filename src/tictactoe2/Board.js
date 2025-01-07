import React, { useState } from "react";
import Button from "./Button";

const Board = ({value, isNext, onplay}) => {
    // const [value, setValue] = useState(Array(9).fill(null));
    // const [isNext, setIsNext] = useState(true);

    const handleClick = (i) => {
        if(winnerHandler(value) || value[i]){
            return;
        }

        const nextValue = value.slice();

        if(isNext){
            nextValue[i] = 'X'
        }else{
            nextValue[i] = 'O'
        }

        onplay(nextValue);
    }

    //축약 가능 >> 나중에 마무리 할때 축약 해보기
    let winner = winnerHandler(value);
    let status;
    if(winner){
        status = "winner is " + winner + " !!!!!"
    }else{
        status = "player is " + (isNext ? 'X' : 'O') + " !!";
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Button value={value[0]} handleClick={() => handleClick(0)}/>
                <Button value={value[1]} handleClick={() => handleClick(1)}/>
                <Button value={value[2]} handleClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Button value={value[3]} handleClick={() => handleClick(3)}/>
                <Button value={value[4]} handleClick={() => handleClick(4)}/>
                <Button value={value[5]} handleClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Button value={value[6]} handleClick={() => handleClick(6)}/>
                <Button value={value[7]} handleClick={() => handleClick(7)}/>
                <Button value={value[8]} handleClick={() => handleClick(8)}/>
            </div>
        </>
    )
};

function winnerHandler(value){
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
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