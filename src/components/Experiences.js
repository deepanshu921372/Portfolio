import React from "react";
import "./ExperiencesStyles.css";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="experience-list">
        <div className="experience-item">
          <h2>Web Developer Intern</h2>
          <p>999logistics, Bengaluru, India</p>
          <p>April 2024 - Present</p>
            <li>
              Increased user satisfaction by 25% through the development of a
              responsive frontend using React.js and Material-UI, resulting in
              improved navigation and interface design.
            </li>
            <li>
              Utilized Amazon S3 for efficient data storage, enhancing the
              application's scalability and performance.
            </li>
            <li>
              Utilized Sequelize to overhaul database structure, leading to a 60%
              decrease in manual errors and 35% faster data retrieval,
              streamlining operations.
            </li>
            <li>
              Created an automated employee ID card system, decreasing processing
              time by X hours, leading to a more streamlined and time-saving
              employee identification process.
            </li>
            <li>
              Optimized database structure, decreasing storage space, leading to
              cost savings and improved system efficiency.
            </li>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
