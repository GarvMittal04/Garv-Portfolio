import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
const Home = () => {
  return (
    <>
    <div className="container home">

      <div className="left">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cumque neque expedita ab? Est minus autem, nisi cupiditate sapiente ipsa velit soluta. Fuga animi architecto rem commodi a aut deserunt.</h1>
      
      <a href={pdf} download="resume..pdf" className="btn btn-outline-warning">Download Resume</a>
      
      </div>
      <div className="right">
        <div className="img">
        <img src="" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home