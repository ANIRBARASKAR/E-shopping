import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_REQUEST_FAIL,
    ADD_PRODUCT_REQUEST_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAIL,
    PRODUCT_REQUEST_SUCCESS,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_REQUEST_FAIL,
    SINGLE_PRODUCT_REQUEST_SUCCESS
} from "../constants/productConstants"

export const productReducer = (
    state = {addProducts:[], products: [], singleProduct: {} },
    { type, payload }
) => {

    switch (type) {

        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_PRODUCT_REQUEST_SUCCESS:
            return {
                isLoading: false,
                addProducts: payload
            }
        case ADD_PRODUCT_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            }

        // 
        case PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_REQUEST_SUCCESS:
            return {
                isLoading: false,
                products: payload
            }
        case PRODUCT_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: false
            }
        case SINGLE_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                singleProduct: payload
            }
        case SINGLE_PRODUCT_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default: return state
    }

}