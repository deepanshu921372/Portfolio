import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Greetings! I'm Deepanshu Sharma, a B.Tech student specializing in AI & ML at Vivekananda Institute of Professional Studies. I focus on JavaScript, React.js, and Node.js, with hands-on experience in front-end and back-end development. I excel in creating responsive interfaces and optimizing user experiences. Outside of coding, I enjoy collaborative environment that values innovation. Let's connect and make a meaningful impact together.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} alt="React" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} alt="React" className="img"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
