import { SET_USER, UNSET_USER } from './constants'

const INITIAL_STATE = {
	id: null,
	token: null
}

const reducer = function (state = INITIAL_STATE, action){
	switch(action.type){
		case SET_USER:
			return {...state, id: action.token.userId, token: action.token}
		case UNSET_USER:
			return {...state, id: null, token: null}
		default:
			return state
	}
}

export default reducer