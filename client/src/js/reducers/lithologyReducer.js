import { 
  GET_LITHOLOGY,
  FILTER_LITHOLOGY
} from '../constants/index';

const initialState = [];

const lithologyReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
		case GET_LITHOLOGY:
      return {
        ...state,
        all: payload,
        results: payload,
      }

    case FILTER_LITHOLOGY:
      console.log(payload)
      const lithTypeFilter = state.all.filter(lith => {
        if(payload.lith_type === '') {
          return lith
        } else if (lith.type === payload.lith_type) {
          return lith
        }
      })

      const lithGroupFilter = lithTypeFilter.filter(lith => {
        if(payload.lith_group === '') {
          return lith
        } else if (lith.group === payload.lith_group) {
          return lith
        }
      })

      const lithClassFilter = lithGroupFilter.filter(lith => {
        if(payload.lith_class === '') {
          return lith
        } else if (lith.class === payload.lith_class) {
          return lith
        }
      })

      return {
        ... state, 
        results: lithClassFilter
      }
    default:
      return state
  }
}

export default lithologyReducer;