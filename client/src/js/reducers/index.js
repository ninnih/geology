import { 
	GET_MINERALS, 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_MINERALS:
			return payload
				
    default:
			return state;
  }
}

export default rootReducer;
