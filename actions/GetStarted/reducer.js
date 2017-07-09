import { GET_POST, LOAD_USER, LOAD_CONTENT } from './constants'

const INITIAL_STATE = {
    user: {},
    post: {},
    content: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOAD_USER:
        	return { ...state, user: action.payload }
        case LOAD_CONTENT:
        	return { ...state, content: action.payload }
        case 'LOADED_POST':
        	return { ...state, post: action.payload }
        default:
        	return state
    }    
}