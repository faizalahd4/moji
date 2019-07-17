import React, {useState,useEffect} from "react";
import ModalPopup from '../../components/modal/modalPopup';

export const HomePage = () => { 
    const [state,setState]=useState(0);

    
    useEffect(() => {
        setState(0);
      }, []);

    function handleChange(e: any){

    }


    return (
        <div className="container">
            This is homepage
			<ModalPopup btnClassName="btn btn-primary" />
        </div>
    )
}

