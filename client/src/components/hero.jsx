import React, {useContext} from "react";
import BoxButton from './boxbutton';


function Hero(){
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
          <BoxButton>Learn more</BoxButton>
        </div>
   </div>
  );
}

export default Hero;