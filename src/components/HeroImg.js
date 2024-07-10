import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p style={{fontSize: '1.5rem'}}>Greetings from Deepanshu Sharma !!</p>
            <h1>React <span style={{color: '#f8d90e'}}> Developer.</span></h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;