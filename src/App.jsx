import { useState } from 'react'
import './App.css'
import ImgToCheck from './components/imgToCheck'
import AnswerButton from './components/answerButton'
import LiveScore from './components/scores/liveScore'
import HighScore from './components/scores/highScore'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
    
 
  return (
    <div className="App">      
      {/* Componentes: 50% YES / NO
                   IMG
                   Score
                   High Score
       */}
      <h1>REAL OR <code>AI</code></h1>
      
      <ImgToCheck />
      
      <div className='buttonsRow'>
        <AnswerButton text='REAL' />
        <AnswerButton text='AI' />
      </div>

      <div className='scoresRow'>
        <HighScore start={score}/>
        <LiveScore start={highScore}/>
      </div>

    </div>
  )
}

export default App
