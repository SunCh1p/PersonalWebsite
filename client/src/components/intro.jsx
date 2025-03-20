import React from "react";
import myImage from "../assets/19199262.png";

function Intro(){
  return (
    <div className="intro">
      <div className="vContainerCentered">
        <h1>Let me Introduce Myself</h1>
        <div className="DecorativeHLine"></div>
        <div className="columnTwo">
          <div className="vContainer">
            <h2>I'm Connor <span className="textNeutral">Blaha</span></h2>
            <p>I am student from Heath Ohio pursuing a computer science degree from Kent State University.
              I've worked with languages C++, python, and javascript. 
              My goal is to become a professional software developer while building games as a hobby.
            </p>
            <p>Aside from programming and academic related activities, I enjoy playing video games, watching tv, reading books, and occassionally if I'm feeling up to it, hiking.</p>
          </div>
          <div className="vContainerRightAligned">
            <img src={myImage} alt="My Image" width="500" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Intro;