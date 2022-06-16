import * as api from '../api'
import { setCurrentUser } from './currentUser'

const error_url = "Error: Request failed with status code "
export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        if (error == `${error_url}404`) alert("User already Exist.");
        else alert("Something went worng..\nTry Again!!");
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        if (error == `${error_url}404`) alert("User don't Exist.");
        else if (error == `${error_url}400`) alert("Invalid credentials");
        else alert("Something went worng..\nTry Again!!");
        console.log(error)
    }
}
