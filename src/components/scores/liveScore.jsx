import React from 'react'

const liveScore = (props) => {
  
  const startScore = props.start
  
  return (
    <div class='liveScore'>Score: {startScore}</div>
  )
}

export default liveScore