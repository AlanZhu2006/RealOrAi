import React, { useState, useEffect } from 'react'
import imgData from '../assets/data/images.json'

const imgToCheck = () => {
  
  const [imgList, setImgList] = useState(imgData)


  useEffect(() => {

    // console.log(imgList)
    
  }, [])


  return (<div className='imgContainer'>
          <img src={imgList[3].src} />
        </div>
  )
      
  
}

export default imgToCheck