import { combineReducers } from 'redux';

import message from './redux/Movies/reducer';

const rootReducer = combineReducers({
  message
});

export default rootReducer;
