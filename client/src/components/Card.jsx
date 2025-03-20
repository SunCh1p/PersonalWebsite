import React from "react";
import BoxButton from "./boxbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Card(props){
  return(
    <div className="card vContainerCentered">
      <h2>{props.title}</h2>
      <div className="DecorativeHLine"></div>
      <p>{props.description}</p>
      <BoxButton>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </BoxButton>
    </div>
  );
}

export default Card;