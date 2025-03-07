import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faProjectDiagram, faFileAlt, faUser, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {DarkModeContext} from "../context.jsx";

function NavBar(){
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const navigate = useNavigate();

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  function toggleMode(){
    toggleDarkMode();
  }


  useEffect(() => {
    const handleScroll = () => {
        setScrollState(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick(page){
    setOpen(false);
    navigate(page)
  }
  function toggleMenu(){
    setOpen(!open);
  }


  return(
    <div className={`navBarContainer ${scrollState ? 'blur' : ''} bgdprimary`}>
      <h1 className="titleHighlight">Connor <span className="textNeutral">Blaha</span></h1>
      <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
        <div className="transition"><Button onClick={() => toggleMode()}>{darkMode ? <FontAwesomeIcon style={{ fontSize: "1rem", width: "1rem", height: "1rem" }} icon={faSun}/> : <FontAwesomeIcon style={{ fontSize: "1rem", width: "1rem", height: "1rem" }} icon={faMoon}/>}</Button></div>
        <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
          <div className = "line line1"></div>
          <div className = "line line2"></div>
          <div className = "line line3"></div>
        </div>
      </div>
      <div className={`navButtons ${open ? 'open' : ''}`}>
        <Button onClick={() => handleClick('/')}> <FontAwesomeIcon icon={faHome}/> Home</Button>
        <Button onClick={() => handleClick('/Projects')}> <FontAwesomeIcon icon={faProjectDiagram}/> Projects</Button>
        <Button onClick={() => handleClick('/Resume')}> <FontAwesomeIcon icon={faFileAlt}/> Resume</Button>
        <Button onClick={() => handleClick('/About')}> <FontAwesomeIcon icon={faUser}/> About</Button>
        <Button onClick={() => handleClick('/Contact')}><FontAwesomeIcon icon={faEnvelope}/>Contact</Button>
        {!open && <Button onClick={() => toggleMode()}>{darkMode ? <FontAwesomeIcon style={{ fontSize: "1rem", width: "1rem", height: "1rem" }} icon={faSun}/> : <FontAwesomeIcon style={{ fontSize: "1rem", width: "1rem", height: "1rem" }} icon={faMoon}/>}</Button>}
      </div>
    </div>
  );
}

export default NavBar;