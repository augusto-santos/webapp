import { LOAD_POST, LOAD_CONTENT, LOAD_USER } from './constants'

const INITIAL_STATE = {
	user: 'TesteUser',
	post: 'TestePost',
	content: 'TestContent'
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case LOAD_POST: 
			return { ...state, post: action.payload }
		case LOAD_USER:
			return { ...state, user: action.payload }
		case LOAD_CONTENT:
			return { ...state, content: action.payload }
		default:
			return state
	}
}

export default reducer