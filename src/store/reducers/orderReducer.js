import { ORDER_REQUEST, ORDER_REQUEST_FAIL,ORDER_REMOVE_PLACEORDER, ORDER_REQUEST_SUCCESS } from "../constants/orderConstant";

export const orderReducer = (
    state ={},
    {type,payload}
) => {
     switch(type){

        case ORDER_REQUEST: return{isLoading:true}
        case ORDER_REQUEST_SUCCESS: return{
            isLoading:false,
        placeOrder:payload
    
    }


        case ORDER_REQUEST_FAIL: return{isLoading:false,
        error:payload}


    //     case ORDER_EMPTY: return{isLoading:false,
    // payload:[]}

    case ORDER_REMOVE_PLACEORDER : return {}


        default : return state
     }
}