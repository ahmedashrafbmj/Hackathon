import ActionType from '../constants/contant'
const INITIAL_STATE = {
    user: {},
    isLoading: false,
    isAuthenticated:false
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.USER_REQUEST:
            // case ActionType.LOAD_USER_REQUEST:
            return {
                isLoading: true,
                isAuthenticated:false
            }
        case ActionType.USER_REQUEST_SUCCESS:
            // case ActionType.LOAD_USER_SUCCESS:
            console.log(state);
            return {
                ...state,
                isLoading: false,
                isAuthenticated:true,
                user: action.payload,
            }
        case ActionType.USER_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuthenticated:false,
                user:null,
            }
        // case ActionType.LOAD_USER_FAIL:
        //     return{
        //         isLoading: false,
        //         isAuthenticated:false,
        //         user:null,
        //     }
        default:
            return state
    }
}