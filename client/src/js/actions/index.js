import { 
  GET_MINERALS, 
  FILTER_MINERALS
} from '../constants/index';

export const getMinerals = payload => {
  return {
    type: GET_MINERALS,
    payload,
  }
}

export const filterMinerals = payload => {
  return {
    type: FILTER_MINERALS,
    payload,
  }
}
