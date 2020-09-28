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
			// Rewrite this to be dynamic  
			return {
				...state,
				results: state.all.filter(mineral => { 
					if(mineral.mineral_type === payload.mineral_type.toLowerCase() &&
						 mineral.crystal_form !== null && mineral.crystal_form === payload.crystal_form && 
						 mineral.mineral_color !== null && mineral.mineral_color.includes(payload.mineral_colour.map(colour => colour))) {
						return mineral
					}
				 })
			}
	
    default:
			return state;
  }
}

export default rootReducer;
