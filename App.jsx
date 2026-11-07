import {useState} from "react";
import "./App.css";
function App(){
  const[board,setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const[currentPlayer, setCurrentPlayer] = useState("X");
  const[winner,setWinner] = useState("");
  const winningCombinations = [ [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];
   function checkWinner(boardToCheck){
    return winningCombinations.some(combo => {
return (
      boardToCheck[combo[0]] !== "" &&
      boardToCheck[combo[0]] === boardToCheck[combo[1]] &&
      boardToCheck[combo[1]] === boardToCheck[combo[2]]
    );
});

   } 
  
  return(
    <div>
      <h1 className="title">Tic-Tac-Toe club</h1>
    <p className="description">Your cozy game space...</p>
     {winner && <h2 className="detwin">{winner} wins! 🎉</h2>}
     {winner && (<button className="pa-btn" onClick={() => {
setBoard(["","","","","","","","",""]);
setWinner("");
setCurrentPlayer("X");
     }}>
      Play Again
      
      </button>)}
     <div className="board">
      
    {board.map((cell,index) => (
      
     <button className="square" key={index} 
     
     onClick={() => {
      if (winner) {
  return;
}
         if(board[index] !== ""){
    return;
  }
        const newBoard = [...board];//create a copy  of board
        newBoard[index] = currentPlayer; // x is placed in clicked cell
        setBoard(newBoard);// ui rerenders with new board state
    if (checkWinner(newBoard)) {
  setWinner(currentPlayer);
}
        if (currentPlayer === "X"){
    setCurrentPlayer("O");
  }
  else{
    setCurrentPlayer("X");
  }
 
     }}>
        {cell}
      </button>
    
))}</div>
  </div>

  
 
 );}
  export default App;
