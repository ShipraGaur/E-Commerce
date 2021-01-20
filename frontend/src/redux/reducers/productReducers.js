import * as ActionTypes from '../ActionTypes/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch(action.type){
        case ActionTypes.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case ActionTypes.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case ActionTypes.PRODUCT_LIST_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: { reviews: [] }}, action) => {
    switch(action.type){
        case ActionTypes.PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case ActionTypes.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case ActionTypes.PRODUCT_DETAILS_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.PRODUCT_DELETE_REQUEST:
            return { loading: true}
        case ActionTypes.PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case ActionTypes.PRODUCT_DELETE_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state
    }
}

export const productUpdateReducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.PRODUCT_UPDATE_REQUEST:
            return { loading: true}
        case ActionTypes.PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case ActionTypes.PRODUCT_UPDATE_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state
    }
}