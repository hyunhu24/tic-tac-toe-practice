import React, {useState} from "react";
import Board from "./Board";

const Game = () => {
    // const [value, setValue] = useState(Array(9).fill(null));
    const [value, setValue] = useState([Array(9).fill(null)]);
    const [isNext, setIsNext] = useState(true);
    const currentValue = value[value.length - 1];
    console.log(value)

    const onPlay = (nextValue) => {
        setValue(nextValue);
        setIsNext(!isNext);
    }

    // const moves = value.map((el, idx) => {
    //     return(
    //         <li key={idx}>
    //             <button></button>
    //         </li>
    //     )
    // });

    return(
        <>
        <div className="game">
            <div className="game-board">
                <Board value={currentValue} isNext={isNext} onPlay={onPlay}/>
            </div>
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
        </>
    )
}
export default Game;