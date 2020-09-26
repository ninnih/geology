import { 
	GET_MINERALS, 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;
console.log(payload)

	switch (action.type) {
		case GET_MINERALS:
			return [
				...state, {
						id: payload.id,
						title: payload.title,
						completed: false
					}
				]

    default:
			return state;
  }
}

export default rootReducer;
