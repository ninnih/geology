import { 
	GET_MINERALS,
	FILTER_MINERALS 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_MINERALS:
				return {
					...state,
					all: payload,
					results: payload,
				}

		case FILTER_MINERALS:
			console.log(payload)
			const filtered = state.all.filter(mineral => {
				for (let key in payload) {
					if(mineral[key] === undefined || mineral[key] != payload[key]) {
						return false
					} 
				}
				return mineral
			})

			return {
				...state,
				results: filtered
			}

	
    default:
			return state;
  }
}

export default rootReducer;
