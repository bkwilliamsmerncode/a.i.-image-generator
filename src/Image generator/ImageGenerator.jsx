import React from 'react'
import Default from "../Assets/Default.jpg"
import "./ImageGenerator.css"


const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
     <div className="header">AI Image  <span>Generator</span></div>
 <div className="img-loading">
    <div className="image"><img src={Default} alt="" /></div>
 </div>
    </div>
  )
}

export default ImageGenerator
