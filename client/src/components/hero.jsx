import React from "react";
import BoxButton from './boxbutton';
import image from '../assets/19199262.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Hero(){

  return(
    <div className="Hero">
      <div className="columnTwo container">
        <div className = "vContainer textAccent">
          <div className="DecorativeHLine"/>
          <p>Welcome to my portfolio</p>
          <h1 className="title">I'm Connor Blaha</h1>
          <p className="subtitle">Future software developer &lt;/&gt;</p>
          <div className="hContainer">
            <BoxButton>Resume<span> </span><FontAwesomeIcon icon={faDownload}/></BoxButton>
            <BoxButton>Projects</BoxButton>
          </div>
        </div>
        <div className="vContainerCentered">
          <img src={image} height="600px"/>
          <a className="textAccent" href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;