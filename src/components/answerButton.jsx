import React from 'react'

const answerButton = (props) => {

  const  { check, id } = props

  return (
    <button className='answerButton' onClick={() => props.onClickAnswer(check, id)}>
        {props.text}
    </button>
        
    
  )
}

export default answerButton