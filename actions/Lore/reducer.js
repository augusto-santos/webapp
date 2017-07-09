import { LOAD_MDFILE } from './constants'

const INITIAL_STATE = {
	user: ['testeUser'],
	post: ['testePost'],
	content: ['testeContent']
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case LOAD_MDFILE:
			return { ...state, content: action.payload }
		case 'LOAD_USER_POST':
			return { ...state, user: action.payload }
		case 'LOADED_POST':
			return {...state, post: action.payload }
		default:
			return state
	}
}

export default reducer