import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from './data/hero.json';

const Home = () => {
  return (
    <>
    <div className="container home">

      <div className="left">
        <h1>This is a Garv Mittal's Portfolio which is under contruction .</h1>
      
      <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
      
      </div>
      <div className="right">
        <div className="img">
        <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home