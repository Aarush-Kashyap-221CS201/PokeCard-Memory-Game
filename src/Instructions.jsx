import React,{useState} from "react";

function Instructions(){
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    function handleMouseEnter() {
        setTooltipVisible(true);
    }

    function handleMouseLeave() {
        setTooltipVisible(false);
    }

    function handleMouseMove(e) {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <div>
        <button
                id="instructions_btn"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
        >
        Instructions
        </button>
        {tooltipVisible && (
            <div
                className="tooltip"
                style={{
                    position: "absolute",
                    top: tooltipPosition.y + 10,
                    left: tooltipPosition.x + 10,
                }}
            >
                Click on Pokémon cards that have not been clicked yet!
            </div>
        )}
        </div>
    );
}

export default Instructions;