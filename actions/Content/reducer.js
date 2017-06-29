import { LOAD_ALL_POSTS } from './constants'

const INITIAL_STATE = {
	conteudo: []
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case LOAD_ALL_POSTS:
			return { ...state, conteudo: action.payload}
		default:
			return state
	}
}