import React from "react";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/Card';
function Projects(){
  return(
    <div>
      <NavBar/>
      <div className="Projects vContainerCentered">
        <h1>Some of my <span className="textNeutral">Projects</span></h1>
        <div className="DecorativeHLine"></div>
        <div className="cardDisplay hContainer">
          <Card
            title="ItemQuest"
            description="AI image recognition game built with multiplayer capabilities. 
            Players can create rooms and play in multiple simultaneous games on the same server."
            link="https://github.com/Item-Quest/TeamBravo"
          />
          <Card
            title="GetItRight"
            description="Sample Computer Parts website implemented using Flask and MySql Database"
            link="https://github.com/SunCh1p/Database-Project"
          />
          <Card
            title="MineSweeper Clone"
            description="Minesweeper windows xp clone built using python and pygame"
            link="https://github.com/OU-CS3560/minesweeper"
          />
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Projects