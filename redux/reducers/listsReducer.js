import {
	MAIN_TYPE,
	CROPS_LIST,
	CROP_DETAIL,
	MY_CROP_DETAIL,
	CROP_ADD,
	CHEMICALS_LIST,
	CHEMICAL_DETAIL,
} from "../redux_actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const ListsReducer = (state={}, action) => {
	
	switch (action.type) {
		case MAIN_TYPE:
			
			return merge(state, {main:action.payload})
			break;
		case CROPS_LIST:
			
			return merge(state, {crops:action.payload})
			break;
		case CHEMICALS_LIST:
			
			return merge(state, {chemicals:action.payload})
			break;
		case CROP_DETAIL:
			
			return merge(state, {crop_detail:action.payload})
			break;

		case CHEMICAL_DETAIL:
			
			return merge(state, {chemical_detail:action.payload})
			break;

		case MY_CROP_DETAIL:
			
			return merge(state, {my_crop_detail:action.payload})
			break;
		case CROP_ADD:
			
			return merge(state, {crop_add:action.payload})
			break;
		default:
			return state
			break;
	}
}

export default ListsReducer