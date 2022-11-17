import React, { useState, useEffect } from 'react'
import imgData from '../assets/data/images.json'
import AnswerButton from '../components/answerButton'
import LiveScore from '../components/scores/liveScore'
import HighScore from '../components/scores/highScore'

const imgToCheck = () => {


  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)  
  const [imgList, setImgList] = useState(imgData)
  const [imgIndex, setImgIndex] = useState(Math.floor(Math.random() * (imgData.length)))
  const [usedImgs, setUsedImgs] = useState([])


  // Fetch images

  const handleAnswerClick = (answer, id) => {
    // console.log(id)
    if (answer === imgList[imgIndex].real){
      console.log('Success')
      setScore(score => score + 1)
      setUsedImgs(...usedImgs, usedImgs.push(id))
    }else{
      console.log('No success')
      if (score > highScore){
        setHighScore(score)
      }
    }
    console.log(usedImgs)
  }


  return (<>
        <div className='imgContainer'>
          <img src={imgList[imgIndex].src} />
        </div>

        <div className='buttonsRow'>
          <AnswerButton text='REAL' check={1} onClickAnswer={handleAnswerClick} id={imgIndex}/>
          <AnswerButton text='AI' check={0} onClickAnswer={handleAnswerClick} id={imgIndex}/>
        </div>

        <div className='scoresRow'>
          <HighScore score={highScore}/>
          <LiveScore score={score}/>
        </div>

        </>
  )
      
  
}

export default imgToCheck