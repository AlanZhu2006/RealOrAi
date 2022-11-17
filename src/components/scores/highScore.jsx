import React from 'react'

const highScore = (props) => {
  
  return (
    <div className='highScore'>
    
        <span>High Score: </span>{props.score}
        
    </div>
  )
}

export default highScore