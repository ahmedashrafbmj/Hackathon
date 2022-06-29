import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postDetailReducer from "./postDetailReducer";
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";
import bookDetailReducer from './bookDetailReducer'
const rootReducer = combineReducers({
    postReducer,
    postDetailReducer,
    userReducer,
    bookReducer,
    bookDetailReducer
})

export default rootReducer