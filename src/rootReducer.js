import { combineReducers } from 'redux';

import message from './redux/movies/reducer';

const rootReducer = combineReducers({
  message
});

export default rootReducer;
