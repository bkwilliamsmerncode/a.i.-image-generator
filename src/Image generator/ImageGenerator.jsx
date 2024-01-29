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
 <div className="search-box">
    <div className="left"><input type="text" className='search-input' placeholder='Describe what you want to see!' /></div>
    <div className="right"><div className="generate-btn">Generate</div></div>
    
    
 </div>
    </div>
  )
}

export default ImageGenerator
