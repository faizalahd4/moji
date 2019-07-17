import React, {useState,useEffect,useContext} from "react";
import NavContext from "../../models/navContext";

export const Footer = () => { 
    const [footerValue,setFooterValue]=useState(0);
    const context =useContext(NavContext);
    
    useEffect(() => {
        setFooterValue(0);
      }, []);

    function handleChange(e){

    }

    return (
		<footer>
		  <div className="footer-copyright text-center py-3">© 2019 Copyright: 
			<a href="#">Dev Team</a>
			
			{console.log("footer",context.currentPage)}
			
		  </div>
		</footer>
    )
}

