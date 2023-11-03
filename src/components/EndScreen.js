import React from "react";
import '../App.css'
import { Questions } from '../helpers/Questions';
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
const EndScreen = ()=>{
  const { score, setScore, gameState, setGameState}= useContext(GameStateContext);
  const restartQuiz = ()=>{
    setScore(0);
    setGameState('menu');
  }
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1>{score}/{Questions.length}</h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen;