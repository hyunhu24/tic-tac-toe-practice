import React, {useState} from "react";
import Board from "./Board";

const Game = () => {
    const [value, setValue] = useState([Array(9).fill(null)]);
    const [isNext, setIsNext] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const currentValue = value[currentIdx];

    const onPlay = (nextSquare) => {
        const history = [...value.slice(0, currentIdx + 1), nextSquare]
        // setValue([...value, nextSquare]);
        setValue(history);
        setIsNext(!isNext);
        setCurrentIdx(history.length - 1);
    }

    const jumpTo = (idx) => {
        setCurrentIdx(idx);
        setIsNext(idx % 2 !== 0);
    }

    const moves = value.map((_, idx) => {
        let description;

        if(idx > 0){
            description = "move # " + idx + " !!!";
        }else{
            description = "Let's Play Start!!";
        }

        return(
            <li key={idx}><button onClick={() => jumpTo(idx)}>{description}</button></li>
        )
    })
    return(
        <div className="game">
            <div className="game-board">
                <Board value={currentValue} isNext={isNext} onPlay={onPlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game;