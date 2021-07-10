import {
	MAIN_TYPE,
} from "../redux_actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const ListsReducer = (state={}, action) => {
	
	switch (action.type) {
		case MAIN_TYPE:
			
			return merge(state, {main:action.payload})
			break;
	
		default:
			return state
			break;
	}
}

export default ListsReducer