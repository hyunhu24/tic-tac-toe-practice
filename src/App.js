// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from './component/Button/Button';
import Button from './tictactoe2/Button';
import Square from './tictactoe/Square';
import Board from './tictactoe/Board';
import InputTest from './InputTest';
import Game from './tictactoe/Game';
// import TicTacToe from './tictactoe2/TicTacToe';
import TicTacToe from './tictactoe5/TicTacToe';
import TicTacToeLast from './tictactoe3/TicTacToeLast';
import TicTacToeFinal from './tictactoe4/TicTacToeFinal';


function App() {
  // const [buttonValue, setButtonValue] = useState(0);
  // const [buttonValue2, setButtonValue2] = useState(0);

  // const handleClick = () => {
  //   setButtonValue(buttonValue + 1);
  // };
  // const handleClick2 = () => {
  //   setButtonValue2(buttonValue2 + 1);
  // };

  // return (
  //   <div className="App">
  //     <Button handleClick={handleClick} buttonValue={buttonValue}/>
  //     <Button handleClick={handleClick2} buttonValue={buttonValue2}/>
  //   </div>
  // );

  return(
    <>
    <TicTacToe />
    {/* <TicTacToeFinal/> */}
    {/* <TicTacToeLast/> */}
    {/* <TicTacToe/> */}
      {/* <Game /> */}
      {/* <InputTest/> */}
    </>
  )
}

export default App;
