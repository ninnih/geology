import { 
  GET_MINERALS, 
  FILTER_MINERALS,
  GET_LITHOLOGY,
  FILTER_LITHOLOGY,
  GET_INTERVAL,
  SEARCH_INTERVAL,
  GET_POLYGON
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
  return {
    type: FILTER_LITHOLOGY,
    payload,
  }
}

export const getInterval = payload => {
  return {
    type: GET_INTERVAL,
    payload,
  }
}

export const searchInterval = payload => {
  return {
    type: SEARCH_INTERVAL,
    payload,
  }
}

export const getPolygon = payload => {
  return {
    type: GET_POLYGON,
    payload,
  }
}