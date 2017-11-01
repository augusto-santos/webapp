import { combineReducers } from 'redux'

/** reducers imports */
import started from '../actions/GetStarted/reducer'
import content from '../actions/Content/reducer'
import User from '../routes/User/reducer'
import login from '../actions/Login/reducer'
import layout from '../actions/Layout/reducer'
import lore from '../actions/Lore/reducer'
import post from '../actions/Post/reducer'
import taskers from '../actions/home/reducer'

const rootReducers = combineReducers({
		User,
		taskers,
		login,
		post,
		lore,
    layout,
    started,
	content
})

export default rootReducers