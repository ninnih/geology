import { 
  GET_MINERALS, 
} from '../constants/index';

export const getMinerals = payload => {
  return {
    type: GET_MINERALS,
    payload,
  }
}
