import { combineReducers } from 'redux'

/** reducers imports */
import getStartReducer from '../actions/GetStarted/reducer'
import contentReducer from '../actions/Content/reducer'
import User from '../routes/User/reducer'
import { loginReducer } from '../routes/Login/reducer'
import layout from '../actions/Layout/reducer'

const rootReducers = combineReducers({
		User,
		loginReducer,
    layout,
    request: getStartReducer,
    content: contentReducer
})

export default rootReducers