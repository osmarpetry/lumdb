import { combineReducers } from 'redux';

import toggle from './redux/toggle/reducer';
import movies from './redux/movies/reducer';

const rootReducer = combineReducers({
  toggle,
  movies
});

export default rootReducer;
