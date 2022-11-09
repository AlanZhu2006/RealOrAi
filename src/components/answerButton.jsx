import React from 'react'

const answerButton = (props) => {

  console.log('render')

  function handleCheckAnswer(text) {
    
  }


  return (
    <button className='answerButton' onClick={() => handleCheckAnswer(props.text)}>
        {props.text}
    </button>
        
    
  )
}

export default answerButton