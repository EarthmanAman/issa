import {
	LOGIN_SUCCESS, 
	LOGIN_ERROR, 
	LOGIN_ERROR_REMOVE,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	REGISTER_ERROR_REMOVE,
} from "../redux_actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const LoginReducer = (state={}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return merge(state, {user:action.payload})
			break;

		case LOGIN_ERROR:
			
			return merge(state, {loginError:{main:action.payload[0]}})
			break;
		case LOGIN_ERROR_REMOVE:
			
			return merge(state, {loginError:{main:action.payload}})
			break;

		case REGISTER_SUCCESS:
			return merge(state, {user:action.payload})
			break;

		case REGISTER_ERROR:
			
			return merge(state, {registerError:{main:action.payload.errors}})
			break;
		case REGISTER_ERROR_REMOVE:
			
			return merge(state, {registerError:{main:action.payload}})
			break;
		
		default:
			return state
			break;
	}
}

export default LoginReducer