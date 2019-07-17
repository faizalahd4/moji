import React, {useState,useEffect,useContext,useReducer} from "react";
import { Link } from "react-router-dom";
import NavContext from "../../models/navContext";

export const Header = (props) => {
	const [headerValue,setHeaderValue]=useState('home');
	const context =useContext(NavContext);
    const pathname = window.location.pathname;
	const [activeMenu,setActiveMenu] = useState({home:'active',about:''})

    useEffect(() => {
		const df = pathname.replace("/", "");
		if(df){
			setHeaderValue(df);
			context.updateCurrentNav({currentPage:df});
		}
      }, []);
	  
	  
	const handleClick = event => {
	  const id = event.target.id
	  context.updateCurrentNav({currentPage:id});
	  
	  
	  let newActiveNav={};
	  Object.keys(activeMenu).map(function (key) {
		  if(key==id){
			newActiveNav[key]='active'
		  }else{
			  newActiveNav[key]=''
		  }
	  })

	  setActiveMenu(newActiveNav);
	}
	
    return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link className="navbar-brand" to="/">MOGI </Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				  <li className={"nav-item "+activeMenu.home}>
					<Link to="/" onClick={handleClick} id='home'>Home <span className="sr-only">(current)</span></Link>
				  </li>
				  <li className={"nav-item "+activeMenu.about}>
					<Link to="/about" onClick={handleClick} id="about">About</Link>
				  </li>
				</ul>
			  </div>
			</nav>
    )
}

