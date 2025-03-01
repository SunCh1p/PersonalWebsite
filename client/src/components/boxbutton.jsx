import React from "react";

function BoxButton({onClick, children}){
    return (
        <button className='customBoxButton' onClick={onClick}>
            {children}
        </button>
    );
}

export default BoxButton;