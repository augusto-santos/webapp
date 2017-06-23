import { combineReducers } from 'redux'

/** actions reducers imports */
import getStartReducer from '../actions/GetStarted/reducer'
import searchReducer from '../actions/Search/reducer'

const rootReducers = combineReducers({
    request: getStartReducer,
    search: searchReducer
})

export default rootReducers