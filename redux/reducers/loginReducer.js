import {
	LOGIN_SUCCESS, 
	LOGIN_ERROR, 
	LOGIN_ERROR_REMOVE,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	REGISTER_ERROR_REMOVE,

	UPDATE_USER,
	UPDATE_USER_ERROR,
	CHANGE_PASSWORD,
	CHANGE_PASSWORD_ERROR,
} from "../redux_actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const LoginReducer = (state={}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return merge(state, {user:action.payload})
			break;

		case LOGIN_ERROR:
			
			return merge(state, {loginError:{main:action.payload[0]}, user:undefined})
			break;
		case LOGIN_ERROR_REMOVE:
			
			return merge(state, {loginError:{main:action.payload}})
			break;

		case REGISTER_SUCCESS:
			return merge(state, {user:action.payload})
			break;

		case REGISTER_ERROR:
			
			return merge(state, {registerError:{main:action.payload.errors}, user:undefined})
			break;
		case REGISTER_ERROR_REMOVE:
			
			return merge(state, {registerError:{main:action.payload}})
			break;

		case UPDATE_USER:
			return merge(state, {update_user:action.payload})
			break;

		case UPDATE_USER_ERROR:
			return merge(state, {update_user_error:action.payload})
			break;
		case CHANGE_PASSWORD:
			return merge(state, {change_password:action.payload, user:null})
			break;

		case CHANGE_PASSWORD_ERROR:
			return merge(state, {change_password_error:action.payload})
			break;
		default:
			return state
			break;
	}
}

export default LoginReducer