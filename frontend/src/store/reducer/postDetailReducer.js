import ActionType from '../constants/contant'
const INITIAL_STATE = {
    oneProduct: {},
    isLoading: false
}

export default function postDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.PRODUCT_DETAIL_REQUESTED:
            return {
                isLoading: true,
                ...state
            }
        case ActionType.PRODUCT_DETAIL_SUCCESS:
            return {
                isLoading: false,
                oneProduct: action.payload,
            }
        case ActionType.PRODUCT_DETAIL_FAIL:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}