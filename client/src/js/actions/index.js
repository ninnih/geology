import { 
  GET_MINERALS, 
  FILTER_MINERALS,
  GET_LITHOLOGY,
  FILTER_LITHOLOGY
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

export const getLithology = payload => {
  return {
    type: GET_LITHOLOGY,
    payload,
  }
}

export const filterLithology = payload => {
  console.log(payload)
  return {
    type: FILTER_LITHOLOGY,
    payload,
  }
}