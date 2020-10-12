import { 
	GET_MINERALS,
	FILTER_MINERALS 
} from '../constants/index';

const initialState = [];

const mineralReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_MINERALS:
				return {
					...state,
					all: payload,
					results: payload,
				}

		case FILTER_MINERALS:
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
	
    default:
			return state;
  }
}

export default mineralReducer;
