import {NAV_MENU,USER_PROFILE} from '../tools/types';

const updateCurrentNav = (nav,state)=>{
    return {
        ...state,
        currentPage:nav.currentPage
    }
}

const updateUserProfile = (user,state)=>{
    const userProfile = [...state.profile,user]
    return {
        ...state,
        profile:userProfile
    }
}

export default (state,action) => {
    switch(action.type){
        case NAV_MENU:
            return updateCurrentNav(action.payload, state)
		case USER_PROFILE:
			return updateUserProfile(action.payload, state)
        default:
            return state;
    }

}
