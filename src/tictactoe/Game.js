import React,{useState} from "react";
import Board from "./Board";

const Game = () => {
    const [isNext, setIsNext] = useState(true);
    const [value, setValue] = useState([Array(9).fill(null)]);
    const [moveIdx, setMoveIdx] = useState(0);
    const currentSquares = value[moveIdx];

    function handlePlay(nextValue){
        const historyValue = [...value.slice(0, moveIdx + 1), nextValue]
        setValue(historyValue);
        setMoveIdx(historyValue.length - 1);
        setIsNext(!isNext);
    }

    function jumpTo(move){
        setMoveIdx(move);
        setIsNext(move % 2 === 0);
    }

    const moves = value.map((_, idx) => {
        
        let description;
        if(idx > 0){
            description = "move to #" + idx;
        }else{
            description = "move to start!!";
        }

        return(
            <li key={idx}>
               <button type="button" onClick={() => jumpTo(idx)}>{description}</button>
            </li>
        )
    });
    
    return (
        <div className="game">
          <div className="game-board">
            <Board isNext={isNext} value={currentSquares} onplay={handlePlay}/>
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
    );
}

export default Game;