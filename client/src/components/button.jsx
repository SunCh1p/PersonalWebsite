import React from "react";

function Button({onClick, children}){
  return (
    <button className='customButton' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;