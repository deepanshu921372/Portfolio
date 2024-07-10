import "./FooterStyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>New Delhi, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 9213723036
            </h4>
          </div>
          <h4>
            <div className="email">
              <div>
                <FaMailBulk size={20} style={{ color: "white" }} />
              </div>
              <p>sharmadeepanshu1005@gmail.com</p>
            </div>
          </h4>
        </div>
        <div className="right">
          <h2>About the company</h2>
          <p>
            Hey! This is me Deepanshu Sharma a B.Tech student with expertise in
            website development and a passion for crafting elegant, functional
            web applications.
          </p>
          <div className="social">
            <a
              href="https://github.com/deepanshu921310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/deepanshusharma921372/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
        <div className="copyright">
          &copy; 2024 Deepanshu Sharma. All rights reserved.
        </div>
    </div>
  );
};

export default Footer;
