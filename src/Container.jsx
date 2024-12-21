import React,{useState} from "react";
import Header from './Header.jsx'
import CardDisplay from './CardDisplay.jsx'

function Container(){
    const [score,setScore]=useState(0);
    const [maxScore,setMaxScore]=useState(0);

    function handleScoreChange(correct){
        if (correct) setScore(score+1);
        else{
            if (score>maxScore) setMaxScore(score);
            setScore(0);
        }
    }

    return (
        <div id="container">
            <Header scores={[score,maxScore]}/>
            <CardDisplay handleScoreChange={handleScoreChange}/>    
        </div>
    );
}

export default Container;