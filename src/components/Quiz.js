import '../App.css';
import { Questions } from '../helpers/Questions';
import { useState } from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';
function Quiz(){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const { score, setScore} = useContext(GameStateContext);
  const {gameState, setGameState} = useContext(GameStateContext);
  const choseOption = (option)=> {
    setOptionChosen(option);
  }
  const nextQuestion = () => {
    if(Questions[currentQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setCurrentQuestion(currentQuestion+1);
  }
  const FinishQuiz = ()=>{
    if(Questions[currentQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setGameState('Finished');
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
      <button onClick={()=>{choseOption('optionA')}}>{Questions[currentQuestion].optionA}</button>
      <button onClick={()=>{choseOption('optionB')}}>{Questions[currentQuestion].optionB}</button>
      <button onClick={()=>{choseOption('optionC')}}>{Questions[currentQuestion].optionC}</button>
      <button onClick={()=>{choseOption('optionD')}}>{Questions[currentQuestion].optionD}</button>
      </div>
      { currentQuestion === Questions.length - 1 ? 
        (<button onClick={FinishQuiz} id="NextQuestion">Finish Quiz</button>) : (<button onClick={nextQuestion} id="NextQuestion">Next Question</button>)
      }
    </div>
  )
}

export default Quiz