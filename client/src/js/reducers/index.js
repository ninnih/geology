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
<<<<<<< HEAD
				const mineralTypeFilter = state.all.filter(mineral => {
					if(payload.mineral_type === '') {
						return mineral
					} else if (mineral.mineral_type === payload.mineral_type.toLowerCase()) {
						return mineral
					}
				});

				const crystalFormFilter = mineralTypeFilter.filter(mineral => {
					if(payload.crystal_form === '') {
						return mineral
					} else if(mineral.crystal_form === payload.crystal_form) {
						return mineral
					}
				})

				const mineralColourFilter = crystalFormFilter.filter(mineral => {
					if(payload.mineral_color.length === 0) {
						return mineral
					} else if(mineral.mineral_color !== null && mineral.mineral_color.includes(payload.mineral_color.map(colour => colour))) {
						return mineral
					}
				})

				const lustreFilter = mineralColourFilter.filter(mineral => {
					if(payload.lustre.length === 0) {
						return mineral
					} else if(mineral.lustre !== null && mineral.lustre.includes(payload.lustre.map(colour => colour))) {
						return mineral
					}
				})

				return {
					...state,
					results: lustreFilter
				}
=======
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

>>>>>>> a0338e0bfa6240deef7da89180b0d3e8d7453b3f
	
    default:
			return state;
  }
}

export default rootReducer;
