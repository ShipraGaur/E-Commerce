import * as ActionTypes from '../ActionTypes'

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