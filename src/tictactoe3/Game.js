import React, {useState} from "react";
import Board from "./Board";

const Game = () => {
    // const [value, setValue] = useState(Array(9).fill(null));
    const [value, setValue] = useState([Array(9).fill(null)]);
    const [isNext, setIsNext] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);
    // const test = value[currentIdx];
    const currentValue = value[currentIdx];

    const onPlay = (nextValue) => {
        const history = [...value.slice(0, currentIdx + 1), nextValue];
        console.log(history);
        setValue(history)
        // setValue([...value, nextValue]);
        setCurrentIdx(history.length - 1);
        setIsNext(!isNext);
    }

    const jumpTo = (idx) => {
        console.log("idx :" + idx);
        setCurrentIdx(idx);
        setIsNext(currentIdx % 2 === 0)
    }

    const moves = value.map((_, idx) => {
        let description;

        if(idx > 0){
            description = "jump to # " + idx + "!!!";
        }else{
            description = "Start!! # " + idx + "!!!";
        }

        return(
            <li key={idx}>
                <button onClick={()=>jumpTo(idx)}>{description}</button>
            </li>
        )
    });

    return(
        <>
        <div className="game">
            <div className="game-board">
                <Board value={currentValue} isNext={isNext} onPlay={onPlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
        </>
    )
}
export default Game;