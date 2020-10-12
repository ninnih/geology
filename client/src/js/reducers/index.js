import { combineReducers } from 'redux';
import mineralReducer from './mineralReducer';
import lithologyReducer from './lithologyReducer';

export default combineReducers({
  mineralReducer,
  lithologyReducer
});