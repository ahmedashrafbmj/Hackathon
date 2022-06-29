import ActionType from '../constants/contant'
const INITIAL_STATE = {
    oneBooking: {},
    isLoading: false
}

export default function bookDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.BOOKING_DETAIL_REQUESTED:
            return {
                isLoading: true,
                ...state
            }
        case ActionType.BOOKING_DETAIL_SUCCESS:
            return {
                isLoading: false,
                oneBooking: action.payload,
            }
        case ActionType.BOOKING_DETAIL_FAIL:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}