import { combineReducers } from 'redux'

/** actions reducers imports */
import getStartReducer from '../actions/GetStarted/reducer'
import contentReducer from '../actions/Content/reducer'
import User from '../routes/User/reducer'
import { login, changeField } from '../routes/Login/reducer'

const rootReducers = combineReducers({
		User,
		login,
		changeField,
    request: getStartReducer,
    content: contentReducer
})

export default rootReducers