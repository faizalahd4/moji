import React,{useState,useEffect,useReducer,useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import MessengerCustomerChat from 'react-messenger-customer-chat';

import {Header} from './routes/base/Header';
import {Footer} from './routes/base/Footer';

import {HomePage} from './routes/pages/HomePage';
import {About} from './routes/pages/About';


import appReducer from './reducers/appReducer';
import NavContext from "./models/navContext";
import UserContext from "./models/userContext";
import {NAV_MENU} from './tools/types';

import logo from './logo.svg';
import './App.scss';


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
		type: NAV_MENU,
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

					<Route path="/" exact component={HomePage} />
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

export default App;
