import { useState } from 'react'
import './App.css'
import ImgToCheck from './components/imgToCheck'

function App() { 
    
 
  return (
    <div className="App">      
      {/* Componentes: 50% YES / NO
                   IMG
                   Score
                   High Score
       */}
      {/* <h1>REAL OR <code>AI</code></h1> */}
      
      <ImgToCheck />
  
      </div>
  )
}

export default App
