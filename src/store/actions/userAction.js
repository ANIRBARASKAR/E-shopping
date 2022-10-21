import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT
} from "../constants/userConstants"
import axios from "axios"

export const loginAction = ({ email, password }) => async dispatch => {
    try {


        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.get("/register")


        const result = data.find(item => item.email === email && item.password === password)


        if (result) {
            dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: result })

            localStorage.setItem("login", JSON.stringify(result))

        } else {
            dispatch({ type: LOGIN_REQUEST_FAIL, payload: "Username or password Wrong" })
        }
    } catch (error) {
        dispatch({ type: LOGIN_REQUEST_FAIL, payload: error })
    }
}
export const logoutAction = () => dispatch => {dispatch({ type: LOGOUT })

localStorage.removeItem("login")


}
