import { useState } from "react";


const useToggle = (intialVal=false) => {
    // call useState "reserve piece of state"
    const [state,setState] = useState(intialVal);
    const toggle = () => {
        setState(!state); 
    }; 

    
    // return a piece of state and function to toggle it 
    return [state,toggle]; 

}; 


export default useToggle; 