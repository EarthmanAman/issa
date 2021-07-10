import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist"
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import thunk from "redux-thunk";
import reducer from "./reducers/mainReducer"

const persistConfig = {
	key: "root",
	storage:ExpoFileSystemStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store =  createStore(persistedReducer, applyMiddleware(thunk))
export const persistor =  persistStore(store)