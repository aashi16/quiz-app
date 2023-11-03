import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
function Menu(){
  const {gameState, setGameState, userName, setUserName} = useContext(GameStateContext);
  console.log(gameState, userName);
  return (
    <div className="Menu">
      <label>Enter your name:</label>
      <input type="text" placeholder="Example john smith" onChange={(event) => setUserName(event.target.value)}/>
      <button onClick={()=>{setGameState('playing')}} disabled={userName === ''}>Start Quiz</button>
    </div>
  );
}

export default Menu;