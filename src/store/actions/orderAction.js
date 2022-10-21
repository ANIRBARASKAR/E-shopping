import axios from "axios"
import { CART_EMPTY } from "../constants/cartConstants"
import{
    ORDER_REQUEST,
ORDER_REQUEST_SUCCESS,
ORDER_REQUEST_FAIL,
ORDER_REMOVE_PLACEORDER
} from"./../constants/orderConstant"

export const placeOrderAction = (cartItem) => async (dispatch) => {
    try {
        dispatch({ type :  ORDER_REQUEST})

        const {data} = await axios.post("/orders", cartItem)

        dispatch({type: ORDER_REQUEST_SUCCESS, payload:data})
        dispatch({ type:CART_EMPTY, payload:[]})
        localStorage.removeItem("localCart")
        
    } catch (error) {
          dispatch({ type:ORDER_REQUEST_FAIL, payload:error})
    }
}


export const removePlaceOrderAction = () => dispatch => {

    dispatch({type:ORDER_REMOVE_PLACEORDER})
}