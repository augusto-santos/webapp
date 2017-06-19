import { combineReducers } from 'redux'
import getStartedReducer from '../actions/getStartedReducer.js'

const rootReducers = combineReducers({
    getStarted: getStartedReducer
})

export default rootReducers