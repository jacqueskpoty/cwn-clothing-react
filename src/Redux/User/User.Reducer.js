
import { userActionTypes } from '../User/User.Types'

const INITIAL_STATE = {
    currentUser : null,
    error:null
}

const UserReducer = (state  = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.LOGOUT_FAILED:
        case userActionTypes.LOGIN_FAILED:    
        case userActionTypes.SIGNUP_FAILED:
            return{
                ...state,
                error:action.payload
            }
        case userActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }
        case userActionTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
}

export default UserReducer;