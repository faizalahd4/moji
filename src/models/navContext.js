import {createContext} from "react";

const NavContext = createContext({
    currentPage:'',
    updateCurrentNav:(nav)=>{}
});

export default NavContext;