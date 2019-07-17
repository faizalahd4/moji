import {createContext} from "react";

const UserContext = createContext({
    profile:{
		uid: '',
		img:'',
		fullname:'',
		username:''	
	},
    updateUser:(user)=>{}
});

export default UserContext;