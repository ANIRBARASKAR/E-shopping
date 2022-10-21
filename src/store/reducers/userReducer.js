import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
    LOGOUT
} from "./../constants/userConstants"
export const userReducer = (
    state = { login: {} },
    { type, payload }
) => {
    switch (type) {
        case LOGIN_REQUEST: return {
            ...state,
            isLoading: true
        }

        case LOGIN_REQUEST_SUCCESS: return {
            isLoading: false,
            login: payload
        }
        case LOGIN_REQUEST_FAIL: return {
            ...state,
            isLoading: false,
            error: payload
        }
        case LOGOUT: return {}
        default: return state
    }
} 