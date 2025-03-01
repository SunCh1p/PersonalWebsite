import React from 'react';
import NavBar from '../components/navbar';
import BoxButton from '../components/boxbutton';
import profileImage from '../assets/asdf.png'

function Home(){

  return(
    <div>
      <NavBar/>
      <div className="columnTwo container">
        <div className = "vContainer">
          <p>Welcome to my portfolio</p>
          <h1 className="title">I'm Connor Blaha</h1>
          <p className="subtitle">Future software developer &lt;/&gt;</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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

export default Home;