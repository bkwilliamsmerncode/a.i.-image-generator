import React, { useState, useRef } from "react";
import Default from "../Assets/Default.jpg";
import "./ImageGenerator.css";
import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: "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", dangerouslyAllowBrowser: true
//   });

const ImageGenerator = () => {

  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false)

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Authorization:
           process.env.REACT_APP_OPENAIAPI_KEY,
            "User-Agent":"Firefox",
        },
        body:JSON.stringify({
            prompt:`${inputRef.current.value}`,
            n:1,
            size:"512x512",
        }),
      }
    );
    let data = await response.json();
    console.log("hit", data)
    let data_array = data.data;
    setImage_url(data_array[0].url);
    setLoading(false)
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? Default : image_url} alt="" />
        </div>
        <div className="loading">
            <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
            <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>
      <div className="search-box">
        <div className="left">
          <input
            type="text"
            ref={inputRef}
            className="search-input"
            placeholder="Describe what you want to see!"
          />
        </div>
        <div className="right">
          <div className="generate-btn" onClick={() => imageGenerator()} >Generate</div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
