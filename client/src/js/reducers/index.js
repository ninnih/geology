import { 
	GET_MINERALS,
	FILTER_MINERALS 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;
console.log(payload)

	switch (action.type) {
		case GET_MINERALS:
				return {
					...state,
					all: payload,
					results: payload,
				}

		case FILTER_MINERALS:
			// Rewrite this to be dynamic  
			console.log('payload:', payload)
				const mineralTypeFilter = state.all.filter(mineral => {
					if(payload.mineral_type === '') {
						return mineral
					} else if (mineral.mineral_type === payload.mineral_type.toLowerCase()) {
						return mineral
					}
				});
				console.log(mineralTypeFilter)

				const crystalFormFilter = mineralTypeFilter.filter(mineral => {
					if(payload.crystal_form === '') {
						return mineral
					} else if(mineral.crystal_form === payload.crystal_form) {
						return mineral
					}
				})
				console.log('CrystalFilter:', crystalFormFilter)

				const mineralColourFilter = crystalFormFilter.filter(mineral => {
					console.log(mineral)
					if(payload.mineral_color.length === 0) {
						return mineral
					} else if(mineral.mineral_color !== null && mineral.mineral_color.includes(payload.mineral_color.map(colour => colour))) {
						return mineral
					}
				})
				console.log('mineralColourFilter:', mineralColourFilter)


				return {
					...state,
					results: mineralColourFilter
				}
			// return {
			// 	...state,
			// 	results: state.all.filter(mineral => {
			// 		if(mineral.mineral_type === payload.mineral_type.toLowerCase() &&
			// 			 mineral.crystal_form !== null && mineral.crystal_form === payload.crystal_form && 
			// 			 mineral.mineral_color !== null && mineral.mineral_color.includes(payload.mineral_colour.map(colour => colour))) {
			// 			return mineral
			// 		}
			// 	 })
			// }
	
    default:
			return state;
  }
}

export default rootReducer;
