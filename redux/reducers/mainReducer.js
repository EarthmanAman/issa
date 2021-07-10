import {combineReducers} from "redux";

import LoginReducer from "./loginReducer";
import ListsReducer from "./listsReducer";


export default combineReducers({
	loginReducer:LoginReducer,
	listsReducer:ListsReducer,
})
