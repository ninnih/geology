import { 
	GET_MINERALS,
	FILTER_MINERALS 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_MINERALS:
			return payload

		case FILTER_MINERALS:
			console.log(payload)
				
    default:
			return state;
  }
}

export default rootReducer;
