import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

function getYear(){
  
}


function Footer(){
  return(
    <footer className="footer">
      <div className="vContainerCentered">
        <p>Designed by Connor Blaha @2025</p>
        <br/>
        <div className="hContainer">
          <FontAwesomeIcon icon={faGithub}/>
          <br/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;