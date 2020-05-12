import { userActionTypes } from '../User/User.Types'

export const setCurrentUser = (user) => {
    return{
        type: userActionTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const googleSignInStart = () => {
    return{
        type: userActionTypes.LOGIN_WITH_GOOGLE_START
    }
}

export const emailPassWordSignInStart = (emailPassword) => {
    return{
        type: userActionTypes.LOGIN_WITH_EMAIL_PASSWORD_START,
        payload: emailPassword
    }
}

export const signInSuccess = (user) => {
    return{
        type: userActionTypes.LOGIN_SUCCESS,
        payload: user
    }
}

export const signInFailed = (error) => {
    return{
        type: userActionTypes.LOGIN_FAILED,
        payload: error
    }
}

export const checkUserSession = () => {
    return{
        type: userActionTypes.CHECK_USER_SESSION
    }
}

export const logoutStart= () => {
    return{
        type: userActionTypes.LOGOUT_START,
    }
}

export const logoutSuccess = () => {
    return{
        type: userActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutFailed = (error) => {
    return{
        type: userActionTypes.LOGOUT_FAILED,
        payload: error
    }
}

export const signupStart = (userInfo) => {
    return{
        type: userActionTypes.SIGNUP_START,
        payload: userInfo
    }
}

export const signupSuccess = (user,additionalData) => {
    return{
        type: userActionTypes.SIGNUP_SUCCESS,
        payload: {user:{...user},additionalData:{additionalData}}
    }
}

export const signupFailed = (error) => {
    return{
        type: userActionTypes.SIGNUP_FAILED,
        payload: error
    }
}

