import { combineReducers } from 'redux';
import mineralReducer from './mineralReducer';
import lithologyReducer from './lithologyReducer';
import intervalReducer from './intervalReducer';

export default combineReducers({
  mineralReducer,
  lithologyReducer,
  intervalReducer
});