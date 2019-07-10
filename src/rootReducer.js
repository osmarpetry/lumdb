import { combineReducers } from 'redux'

import movies from './redux/movies/reducer'

const rootReducer = combineReducers({ movies })

export default rootReducer
