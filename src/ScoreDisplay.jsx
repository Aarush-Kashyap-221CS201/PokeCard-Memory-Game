import React, { useState } from "react";

function ScoreDisplay({scores}){
    return (
        <div id="score_box">
            <h3>Score: {scores[0]}</h3>
            <h3>Max Score: {scores[1]}</h3>  
        </div>
    );
}

export default ScoreDisplay;