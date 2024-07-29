import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess, signOut } from "./userSlice"
import {publicRequest} from '../requestMethods'
import { logout } from "./authSlice";
export const LOGOUT_ACTION = '[Logout action] logout action'

export const login = async (dispatch , user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login" , user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export function llogout (){
    return {
        type : LOGOUT_ACTION,
    }

}

export const register = async (dispatch ,user) =>{
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register" , user)
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure())
    }
}