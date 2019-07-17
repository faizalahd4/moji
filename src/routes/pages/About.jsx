import React, {useState,useEffect} from "react";

export const About = () => { 
    const [state,setState]=useState(0);

    
    useEffect(() => {
        setState(0);
      }, []);

    function handleChange(e: any){

    }


    return (
        <div className="container">
            This is about page
        </div>
    )
}

