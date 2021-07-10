import {login, register} from "../../api/login"
import {main} from "../../api/list"
import {
	LOGIN_SUCCESS, 
	LOGIN_ERROR, 
	LOGIN_ERROR_REMOVE,

	REGISTER_SUCCESS,
	REGISTER_ERROR,
	REGISTER_ERROR_REMOVE,

	MAIN_TYPE,
} from "./action_types"

// LOGIN ACTIONS
export const LOGIN_USER = (username, password) =>async dispatch => {
	let token;
	
	await login(username, password).then(data => {
	 		token = data
	 		
	 		if(data.token == undefined){
	 			
	 			dispatch({type:LOGIN_ERROR, payload:data.non_field_errors})
	 		}
	 		dispatch({type:LOGIN_SUCCESS, payload:data})
	  })

	 .catch(error => {
	 	dispatch({type:LOGIN_ERROR, payload:null})
	 })
}	

export const LOGIN_ERROR_REMOV = () => dispatch => {
	dispatch({type:LOGIN_ERROR_REMOVE, payload:null})
}


export const REGISTER_USER = (username,first_name, last_name, email, password) =>async dispatch => {
	let token;
	
	await register(username,first_name, last_name, email, password).then(data => {
	 		token = data
	 		
	 		if(data.token == undefined){
	 			
	 			dispatch({type:REGISTER_ERROR, payload:data})
	 		}
	 		dispatch({type:REGISTER_SUCCESS, payload:data})
	  })

	 .catch(error => {
	 	dispatch({type:REGISTER_ERROR, payload:null})
	 })
}	

export const REGISTER_ERROR_REMOV = () => dispatch => {
	dispatch({type:REGISTER_ERROR_REMOVE, payload:null})
}

export const MAIN_ACTION = (user_id) =>async dispatch => {

	await main(user_id).then(data => {
	 		
	 		dispatch({type:MAIN_TYPE, payload:data})
	  })

	 .catch(error => {
	 	dispatch({type:LOGIN_ERROR, payload:null})
	 })
}	
