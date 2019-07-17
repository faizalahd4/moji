import {Types} from '../constants/types';

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
        case Types.NAV_MENU:
            return updateCurrentNav(action.payload, state)
		case Types.USER_PROFILE:
			return updateUserProfile(action.payload, state)
        default:
            return state;
    }

}
