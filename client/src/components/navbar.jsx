import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faProjectDiagram, faFileAlt, faUser, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
function NavBar(){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick(page){
    setOpen(false);
    navigate(page)
  }
  function toggleMenu(){
    setOpen(!open);
  }
  return(
    <div className="navBarContainer">
      <h1 className="titleHighlight">Connor Blaha</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`navButtons ${open ? 'open' : ''}`}>
        <Button onClick={() => handleClick('/')}> <FontAwesomeIcon icon={faHome}/> Home</Button>
        <Button onClick={() => handleClick('/Projects')}> <FontAwesomeIcon icon={faProjectDiagram}/> Projects</Button>
        <Button onClick={() => handleClick('/Resume')}> <FontAwesomeIcon icon={faFileAlt}/> Resume</Button>
        <Button onClick={() => handleClick('/About')}> <FontAwesomeIcon icon={faUser}/> About</Button>
        <Button onClick={() => handleClick('/Contact')}> <FontAwesomeIcon icon={faEnvelope}/> Contact</Button>
      </div>
    </div>
  );
}

export default NavBar;