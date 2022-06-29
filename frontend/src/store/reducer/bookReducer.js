import ActionType from '../constants/contant'
const INITIAL_STATE = {
    booking: [],
    isLoading: false,
}

export default function bookReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.All_BOOKING_REQUESTED:
            return {
                isLoading: true,
                booking: []
            }
        case ActionType.All_BOOKING_SUCCESS:
            return {
                isLoading: false,
                booking:[...action.payload]
            }
        case ActionType.All_BOOKING_FAIL:
            return {
                isLoading: false,
            }
        default:
            return state
    }
}