import { 
  GET_INTERVAL,
  SEARCH_INTERVAL
} from '../constants/index';

const initialState = [];

const intervalReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_INTERVAL:
      const result = payload.filter(interval => {
          if(interval.int_type === 'era' || interval.int_type === 'epoch' || interval.int_type === 'period') {
            return interval
          }
      })

				return {
					...state,
					all: payload,
					results: result
				}

		case SEARCH_INTERVAL:
				
				return {
					...state,
					searchresults: {
						era: payload.era
					},
				}
	
    default:
			return state;
  }
}

export default intervalReducer;
