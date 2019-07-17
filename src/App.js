import React, {useState, useEffect, useReducer, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

//import MessengerCustomerChat from 'react-messenger-customer-chat';

import {Header} from './scripts/view/base/header';
import {Footer} from './scripts/view/base/footer';

import {Home} from './scripts/view/pages/home';
import {About} from './scripts/view/pages/about';

import appReducer from './scripts/reducers/appReducer';
import NavContext from "./scripts/models/navContext";
import UserContext from "./scripts/models/userContext";
import {Types} from './scripts/constants/types';



function App() {
  const [userDetails,setUserDetails] = useState();

  const initialState = {currentPage:'home'}
  const [state,dispatch] = useReducer(appReducer,initialState);
  
  const context = useContext(NavContext);

  useEffect(() => {
	setUserDetails({user:''});
  }, []);	
  

  const updateCurrentNav = (nav)=>{
	dispatch({ 
		type: Types.NAV_MENU,
		payload: nav 
	  });
  }  

  return (
	<UserContext.Provider value={{}}>
		<div className="App">
			<Router>
				<NavContext.Provider value={{
					...state,
					updateCurrentNav
				}}>
					<Header />
				</NavContext.Provider>

					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					
				<NavContext.Provider value={{
					...state,
					updateCurrentNav
				}}>
					<Footer />
				</NavContext.Provider>	
				
			</Router>
			{/*<MessengerCustomerChat
				pageId="329358624303631"
				appId="260822251484082"
			/>*/}
			</div>
	</UserContext.Provider>		
  	);
}

export default withTranslation()(App);
