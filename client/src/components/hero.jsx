import React, {useContext} from "react";
import BoxButton from './boxbutton';
import { useNavigate } from 'react-router-dom';


function Hero(){
  const navigate = useNavigate();
  
  function handleClick(){
    navigate('/About')
  }
  return(
    <div className={`Hero vContainerCentered`}>
          <h1 className="subtitle">Hi, I'm Connor.</h1>
          <div className="vContainerCentered">          
            <h1 className="title">
              I am a student
            </h1>
            <h1 className="title">
              with a <span className="textNeutral">passion</span> for coding.
            </h1>
          </div>
        <div className="DecorativeHLine"></div>
        <div className="hContainerCentered">
          <BoxButton onClick={handleClick}>About me</BoxButton>
        </div>
   </div>
  );
}

export default Hero;