import './App.css';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen'
import Menu from './components/QuizMenu';
import {useState} from 'react'
import { GameStateContext } from './helpers/Contexts';
function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [score, setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName,score, setScore}}>
      {gameState === 'menu' && (<Menu/>)}
      {gameState === 'playing' && (<Quiz/>)}
      {gameState === 'Finished' && (<EndScreen/>)}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
