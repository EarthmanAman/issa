import {login, register, update_user, change_password} from "../../api/login"
import {main, crops, chemicals} from "../../api/list"
import {create_crop} from "../../api/add"
import {
	LOGIN_SUCCESS, 
	LOGIN_ERROR, 
	LOGIN_ERROR_REMOVE,

	REGISTER_SUCCESS,
	REGISTER_ERROR,
	REGISTER_ERROR_REMOVE,

	MAIN_TYPE,
	CROPS_LIST,
	CROP_DETAIL,
	MY_CROP_DETAIL,

	CROP_ADD,
	CHEMICALS_LIST,

	CHEMICAL_DETAIL,

	UPDATE_USER,
	UPDATE_USER_ERROR,

	CHANGE_PASSWORD,
	CHANGE_PASSWORD_ERROR,

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
	 	console.log(error)
	 })
}	

export const CROPS_ACTION = () =>async dispatch => {

	await crops().then(data => {
	 		
	 		dispatch({type:CROPS_LIST, payload:data})
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}	

export const CHEMICALS_ACTION = () =>async dispatch => {

	await chemicals().then(data => {
	 		
	 		dispatch({type:CHEMICALS_LIST, payload:data})
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}

export const CROP_DETAIL_ACTION = (crop) => dispatch => {
	dispatch({type:CROP_DETAIL, payload:crop})
}

export const MY_CROP_DETAIL_ACTION = (crop) => dispatch => {
	dispatch({type:MY_CROP_DETAIL, payload:crop})
}

export const CHEMICAL_DETAIL_ACTION = (chemical) => dispatch => {
	dispatch({type:CHEMICAL_DETAIL, payload:chemical})
}


export const CROP_ADD_ACTION = (user, crop, date) =>async dispatch => {

	await create_crop(user, crop, date).then(data => {
	 		
	 		dispatch({type:CROP_ADD, payload:data})
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}	


export const UPDATE_USER_ACTION = (user_id, username,first_name, last_name, email) =>async dispatch => {
	let token;
	
	await update_user(user_id, username,first_name, last_name, email).then(data => {
	 		token = data
	 		
	 		if(data.token == undefined){
	 			
	 			dispatch({type:UPDATE_USER_ERROR, payload:data})
	 		}
	 		dispatch({type:UPDATE_USER, payload:data})
	  })

	 .catch(error => {
	 	dispatch({type:UPDATE_USER_ERROR, payload:null})
	 })
}	


export const CHANGE_PASSWORD_ACTION = (user_id, old_pass, new_pass) =>async dispatch => {
	let token;
	
	await change_password(user_id, old_pass, new_pass).then(data => {
	 		token = data
	 		
	 		if(data.code == undefined || data.code !== 200){
	 			
	 			dispatch({type:CHANGE_PASSWORD_ERROR, payload:data})
	 		}
	 		dispatch({type:CHANGE_PASSWORD, payload:data})
	  })

	 .catch(error => {
	 	dispatch({type:CHANGE_PASSWORD_ERROR, payload:null})
	 })
}	