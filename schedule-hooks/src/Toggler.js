import React from 'react'; 
import useToggle from "./hooks/useToggle";

const Toggler = () => {
    const [isHappy,ToggleisHappy] = useToggle(false); 
    const [isPoo,ToggleisPoo] = useToggle(false); 
    return (
        <div>
            <h1 onClick={ToggleisHappy} >{isHappy ? "😊": "☹"}</h1> 
            <h1 onClick={ToggleisPoo} >{isPoo ? "🤢": "✨"}</h1> 
        </div>
    )
}

export default Toggler; 
