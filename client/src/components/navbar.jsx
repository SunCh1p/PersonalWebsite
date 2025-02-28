import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faFileAlt, faUser, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
function NavBar(){
  const navigate = useNavigate();
  function handleClick(page){
    navigate(page)
  }

  return(
    <div className="navBarContainer">
      <div className="hContainer">
        <span className="titleHighlight">Connor Blaha</span>
      </div>
      <div className="hContainer">
        <Button onClick={() => handleClick('/')}> <FontAwesomeIcon icon={faHome}/> Home</Button>
        <Button onClick={() => handleClick('/Projects')}> <FontAwesomeIcon icon={faProjectDiagram}/> Projects</Button>
        <Button onClick={() => handleClick('/Resume')}> <FontAwesomeIcon icon={faFileAlt}/> Resume</Button>
        <Button onClick={() => handleClick('/About')}> <FontAwesomeIcon icon={faUser}/> About me</Button>
        <Button onClick={() => handleClick('/Contact')}> <FontAwesomeIcon icon={faEnvelope}/> Contact</Button>
        <Button onClick={() => handleClick('/Blog')}> <FontAwesomeIcon icon={faBlog}/> Blog</Button>
      </div>
    </div>
  );
}

export default NavBar;