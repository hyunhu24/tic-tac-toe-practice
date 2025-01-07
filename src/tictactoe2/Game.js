import React, {useState} from "react";
import Board from "./Board";

const Game = () => {
    // 배열안에 순서대로 배열을 저장하기
    // 배열의 index 를 알수 있는 상태 만들기
    // 배열의 마지막을 저장하는 변수 하나 생성 >> 왜?
    const [value, setValue] = useState([Array(9).fill(null)]);
    const [isNext, setIsNext] = useState(true);
    const [valueIdx, setValueIdx] = useState(0);
    const currentValue = value[valueIdx];

    console.log(valueIdx);
   
    const onplay = (nextValue) => {
        const history = [...value.slice(0, valueIdx + 1), nextValue];
        //?????왜??????
        setValue(history);
        setValueIdx(history.length - 1);
        setIsNext(!isNext);
    }

    const jumpTo = (valueIdx) => {
        console.log("클릭한 곳으로 이동", valueIdx);
        setValueIdx(valueIdx);
        setIsNext(valueIdx % 2 === 0);
    };

    const moves = value.map((_, idx) => {
        
        return(
            <li key={idx}>
                <button onClick={()=>jumpTo(idx)}>{idx}</button>
            </li>
        )
    });

    return(
         <div className="game">
            <div className="game-board">
                <Board value={currentValue} isNext={isNext} onplay={onplay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
};

export default Game;