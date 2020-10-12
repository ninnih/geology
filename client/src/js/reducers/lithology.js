import { 
	GET_LITHOLOGY
} from '../constants/index';

export default function lithology(state = [], action) {
  switch (action.type) {
    case 'GET_LITHOLOGY':
      return state.concat([action.text])
    default:
      return state
  }
}