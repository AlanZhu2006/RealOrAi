import { useState } from 'react'
import './App.css'
import ImgToCheck from './components/imgToCheck'
import AnswerButton from './components/answerButton'
import LiveScore from './components/scores/liveScore'
import HighScore from './components/scores/highScore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">      
      {/* Componentes: 50% YES / NO
                   IMG
                   Score
                   High Score
       */}
      <h1>REAL OR <code>AI</code></h1>

      <div className='imgContainer'>
        <ImgToCheck src='https://lexica-serve-encoded-images.sharif.workers.dev/md/00528776-8d41-49a4-a755-aef2943e9b66'/>
      </div>
      
      <div className='buttonsRow'>
        <AnswerButton text='REAL' onClick=''/>
        <AnswerButton text='AI' onClick=''/>
      </div>

      <div className='scoresRow'>
        <HighScore start={0}/>
        <LiveScore start={0}/>
      </div>

    </div>
  )
}

export default App
