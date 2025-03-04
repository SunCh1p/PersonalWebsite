import React from "react";
import BoxButton from './boxbutton';


function Hero(){

  return(
    <div class="Hero">
      <div className="columnTwo container">
        <div className = "vContainer">
          <p>Welcome to my portfolio</p>
          <h1 className="title">I'm Connor Blaha</h1>
          <p className="subtitle">Future software developer &lt;/&gt;</p>

          <div className="hContainer">
            <BoxButton>Resume</BoxButton>
            <BoxButton>Projects</BoxButton>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Hero;