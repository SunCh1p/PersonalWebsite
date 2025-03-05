import React from "react";

function getYear(){
  const date = new Date();
  return date.getFullYear();
}


function Footer(){
  return(
    <footer className="footer">
      <div className="vContainerCentered">
        <p>@{getYear()} Connor Blaha. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;