import React from "react";
import ScoreDisplay from "./ScoreDisplay.jsx";
import Instructions from "./Instructions.jsx";

function Header({scores}){
    return (
        <div id="header_box">
            <Instructions />
            <h1>Welcome to Memory Card!</h1>
            <ScoreDisplay scores={scores}/>   
        </div>
    );
}

export default Header;